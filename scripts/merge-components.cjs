const fs = require('fs');
const path = require('path');

const dataTsPath = path.resolve(__dirname, '../src/dev/data.ts');
let content = fs.readFileSync(dataTsPath, 'utf8');

// Match MICRO_COMPONENTS array
const microMatch = content.match(/export const MICRO_COMPONENTS = (\[[\s\S]*?\]);/);
// Match MACRO_COMPONENTS array
const macroMatch = content.match(/export const MACRO_COMPONENTS = (\[[\s\S]*?\]);/);

if (!microMatch || !macroMatch) {
  console.error("Could not find arrays");
  process.exit(1);
}

// Safely evaluate arrays (since they only contain static objects)
const micro = eval(microMatch[1]);
const macro = eval(macroMatch[1]);

const componentMap = new Map();

micro.forEach(c => {
  componentMap.set(c.id, { id: c.id, label: c.label, hasMicro: true, hasMacro: false });
});

macro.forEach(c => {
  const baseId = c.id.replace('macro-', '');
  if (componentMap.has(baseId)) {
    componentMap.get(baseId).hasMacro = true;
  } else {
    componentMap.set(baseId, { id: baseId, label: c.label, hasMicro: false, hasMacro: true });
  }
});

const merged = Array.from(componentMap.values()).sort((a, b) => a.label.localeCompare(b.label));

let output = 'export const COMPONENTS = [\n';
merged.forEach(c => {
  output += `  { id: "${c.id}", label: "${c.label}", hasMicro: ${c.hasMicro}, hasMacro: ${c.hasMacro} },\n`;
});
output += '];\n';

// Replace in content
content = content.replace(microMatch[0], output);
content = content.replace(macroMatch[0], ''); // Remove MACRO_COMPONENTS

fs.writeFileSync(dataTsPath, content);
console.log("Merged data.ts successfully.");
