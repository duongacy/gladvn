import { execSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

describe('CLI Integration', () => {
  let tempDir: string;
  const cliPath = path.resolve(__dirname, '../bin/cli.js');

  beforeAll(() => {
    // Create a temporary directory for all CLI tests to avoid polluting the repo
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gladvn-cli-test-'));
  });

  afterEach(() => {
    // Clean up inside tempDir after each test to ensure isolation
    const files = fs.readdirSync(tempDir);
    for (const file of files) {
      fs.rmSync(path.join(tempDir, file), { recursive: true, force: true });
    }
  });

  afterAll(() => {
    // Remove the temp directory when all tests are done
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  const runCli = (args: string, input = '') => {
    return execSync(`node ${cliPath} ${args}`, {
      cwd: tempDir,
      input,
      env: { ...process.env, TEST_ENV: 'true' },
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
  };

  it('[3D-01] [P1] initializes correctly in an empty directory with default destination', async () => {
    // Given: An empty temporary directory
    // When
    const output = runCli('init');

    // Then
    const cleanOutput = output.replace(/\x1b\[[0-9;]*m/g, '');
    expect(cleanOutput).toContain('No CSS files found');
    expect(cleanOutput).toContain('Created app/globals.css');
    expect(cleanOutput).toContain('Copied core files');
    expect(cleanOutput).toContain('Successfully initialized gladvn files in gladvn');

    // Verify files created
    const destDir = path.join(tempDir, 'gladvn');
    expect(fs.existsSync(destDir)).toBe(true);
    expect(fs.existsSync(path.join(destDir, 'lib', 'utils.ts'))).toBe(true);
    expect(fs.existsSync(path.join(destDir, 'styles', 'gladvn.css'))).toBe(true);
    expect(fs.existsSync(path.join(destDir, 'styles', 'tokens.css'))).toBe(true);
    
    // Verify CSS file
    const cssContent = fs.readFileSync(path.join(tempDir, 'app/globals.css'), 'utf-8');
    expect(cssContent).toContain('@import "tailwindcss";');
  }, 60000);

  it('[3D-02] [P1] supports custom destination argument', async () => {
    // Given: An empty temporary directory
    // When
    const output = runCli('init custom-ui');

    // Then
    const cleanOutput = output.replace(/\x1b\[[0-9;]*m/g, '');
    expect(cleanOutput).toContain('Successfully initialized gladvn files in custom-ui');

    // Verify files created in custom dir
    const destDir = path.join(tempDir, 'custom-ui');
    expect(fs.existsSync(destDir)).toBe(true);
    expect(fs.existsSync(path.join(destDir, 'lib', 'utils.ts'))).toBe(true);
  }, 60000);

  it('[3D-03] [P1] handles existing CSS files via non-TTY stdin prompt', async () => {
    // Given: an existing CSS file
    const cssPath = path.join(tempDir, 'styles');
    fs.mkdirSync(cssPath, { recursive: true });
    fs.writeFileSync(path.join(cssPath, 'main.css'), '@import "tailwindcss";\nbody { background: white; }');

    // When: we pass the CSS file path via stdin
    const output = runCli('init', 'styles/main.css\n');

    // Then
    const cleanOutput = output.replace(/\x1b\[[0-9;]*m/g, '');
    expect(cleanOutput).toContain('Path to your main CSS file?');
    expect(cleanOutput).toContain('Injected gladvn styles (tokens + theme) into main.css');

    // Verify CSS file was correctly injected
    const cssContent = fs.readFileSync(path.join(cssPath, 'main.css'), 'utf-8');
    expect(cssContent).toContain('@import "../gladvn/styles/gladvn.css";');
    expect(cssContent).toContain('body { background: white; }'); // Original content preserved
  }, 60000);
});
