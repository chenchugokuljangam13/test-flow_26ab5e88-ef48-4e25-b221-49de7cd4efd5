#!/bin/bash

set -e

IFS='_' read -ra parts <<< "$REPO_NAME"
export FLOW_NAME="${parts[0]}"


response=$(curl -s "$SUPABASE_URL/rest/v1/assessments?name=eq.${FLOW_NAME}" \
  -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Accept: application/json")

url=$(echo "$response" | jq -r '.[0].hidden_test_cases_link')

if [[ "$url" == "null" || -z "$url" ]]; then
  echo "No hidden test case URL found for flow: $FLOW_NAME"
  exit 1
fi

if curl -s -f -o tests/test-case-private.test.js "$url" > /dev/null 2>&1; then
  echo "Hidden test case saved to tests/test-case-private.test.js"
else
  echo "Failed to download hidden test case."
  exit 1
fi
