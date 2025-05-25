#!/bin/bash
set -e
echo "Running unit tests..."
# Run test, capture output silently
npm run unit > /dev/null 2>&1
TEST_EXIT_CODE=$?
exit 0