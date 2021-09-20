#!/bin/bash
set -e

# Миграция базы данных с созданием Deploy Request в PlanetScale

PLANETSCALE_ORG=gooditworks
PROJECT_NAME=base-api
BRANCH_NAME=development

npm run prisma:migrate

PSCALE_OUTPUT_JSON=$(pscale deploy-request create $PROJECT_NAME $BRANCH_NAME --format=json)
DEPLOY_REQUEST_NUMBER=$(echo $PSCALE_OUTPUT_JSON | jq .number)
DEPLOY_REQUEST_URL="https://app.planetscale.com/$PLANETSCALE_ORG/$PROJECT_NAME/deploy-requests/$DEPLOY_REQUEST_NUMBER"

echo "The $BRANCH_NAME branch of the database is migrated, deploy request #$DEPLOY_REQUEST_NUMBER created"
echo $DEPLOY_REQUEST_URL
echo ""
echo "Don't forget to deploy it \033[1mbefore\033[0m the release!"