#!/bin/bash
set -e
IFS='_' read -ra parts <<< "$REPO_NAME"
export ASSESSMENT_ID="${parts[1]}"

echo "Extracting test history from results.json..."

testHistory=$(jq '[.testResults[].assertionResults[] | {testName: .title, testStatus: .status}]' results.json)
numPassed=$(jq '.numPassedTests' results.json)
numTotal=$(jq '.numTotalTests' results.json)
# echo "Formatted Test History: $testHistory"
testScore="${numPassed}/${numTotal}"
# resultSummary=$(jq -n --argjson history "$testHistory" '{ result_summary: $history }')

# echo "Payload to PATCH: $resultSummary"
payload=$(jq -n \
  --argjson summary "$testHistory" \
  --arg score "$testScore" \
  '{ results: { "result-score": $score, "result-summary": $summary } }')

curl -X PATCH "$SUPABASE_URL/rest/v1/candidate_assessment?id=eq.${ASSESSMENT_ID}" \
  -H "apikey: $SUPABASE_API_KEY" \
  -H "Authorization: Bearer $SUPABASE_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=representation" \
  -d "$payload"