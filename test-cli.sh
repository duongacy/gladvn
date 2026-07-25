#!/bin/bash

# Exit on any error
set -e

# Define paths
CLI_PATH="$(pwd)/bin/cli.js"
TEST_DIR="$HOME/Desktop/test-gladvn-cli"

echo "========================================"
echo "🧪 Starting gladvn CLI automated test"
echo "========================================"

# 1. Clean up old test directory
if [ -d "$TEST_DIR" ]; then
  echo "🧹 Cleaning up old test directory at $TEST_DIR..."
  rm -rf "$TEST_DIR"
fi

# 2. Create a dummy Next.js project
echo "📦 Creating a dummy Next.js project..."
# We use non-interactive flags to ensure it doesn't prompt for anything
npx create-next-app@latest "$TEST_DIR" \
  --ts \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm

# Go to the test directory
cd "$TEST_DIR"

# 3. Test INIT command
echo "🚀 Testing 'gladvn init'..."
node "$CLI_PATH" init

# 4. Test ADD components (need them for auth block)
echo "🧩 Adding required components for AuthBlock..."
node "$CLI_PATH" add button
node "$CLI_PATH" add card
node "$CLI_PATH" add input
node "$CLI_PATH" add label
node "$CLI_PATH" add checkbox
node "$CLI_PATH" add separator

# 5. Test ADD-BLOCK command
echo "🧱 Testing 'gladvn add-block auth'..."
node "$CLI_PATH" add-block auth

# 6. Inject AuthBlock into page.tsx
echo "📄 Updating src/app/page.tsx..."
cat << 'EOF' > src/app/page.tsx
import AuthBlock from "../../gladvn/blocks/auth";

export default function Home() {
  return (
    <main>
      <AuthBlock />
    </main>
  );
}
EOF

# 7. Verify Files (Basic Sanity Checks)
echo "🔎 Verifying created files..."

# Check core files
if [ ! -d "gladvn/styles" ] || [ ! -d "gladvn/lib" ] || [ ! -d "gladvn/hooks" ]; then
  echo "❌ Error: Core directories (styles, lib, hooks) are missing!"
  exit 1
fi

# Check block
if [ ! -f "gladvn/blocks/auth.tsx" ]; then
  echo "❌ Error: Auth block was not added correctly!"
  exit 1
fi

echo "========================================"
echo "✅ All tests passed successfully!"
echo "========================================"
echo "The test project is at $TEST_DIR"
echo "To see it in the browser, I will start the server now!"

