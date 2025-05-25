#!/bin/bash

set -e
IFS='_' read -ra parts <<< "$REPO_NAME"
export ASSESSMENT_ID="${parts[1]}"

testHistory=$(jq '[.testResults[].assertionResults[] | {testName: .title, testStatus: .status}]' results.json)
numPassed=$(jq '.numPassedTests' results.json)
numTotal=$(jq '.numTotalTests' results.json)
testScore="${numPassed}/${numTotal}"
submittedAt=$(date +"%Y-%m-%dT%H:%M:%S%:z")
payload=$(jq -n \
  --argjson summary "$testHistory" \
  --arg score "$testScore" \
  --arg submittedAt "$submittedAt" \
  '{submitted_at: $submittedAt, status: "Submitted", results: { "result-score": $score, "result-summary": $summary } }')

curl -s -o /dev/null -w "%{http_code}" -X PATCH "$SUPABASE_URL/rest/v1/candidate_assessment?id=eq.${ASSESSMENT_ID}" \
  -H "apikey: $SUPABASE_API_KEY" \
  -H "Authorization: Bearer $SUPABASE_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=representation" \
  -d "$payload"