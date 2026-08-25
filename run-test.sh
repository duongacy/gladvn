#!/bin/bash

if [ "$1" == "e2e" ]; then
  echo "🚀 Running E2E tests..."
  npm run test:e2e
elif [ "$1" == "ct" ] || [ "$1" == "component" ]; then
  echo "🚀 Running Component tests..."
  npx playwright test -c playwright-ct.config.ts
elif [ "$1" == "all" ]; then
  echo "🚀 Running all tests (E2E & Component)..."
  npm run test:e2e
  npx playwright test -c playwright-ct.config.ts
else
  echo "Usage: ./run-test.sh [e2e|ct|all]"
  echo ""
  echo "Commands:"
  echo "  e2e : Run End-to-End tests (6 tests)"
  echo "  ct  : Run Component tests (all UI components)"
  echo "  all : Run both E2E and Component tests"
  echo ""
  echo "Example: ./run-test.sh ct"
fi
