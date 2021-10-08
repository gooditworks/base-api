# Github Actions

В проекте используются несколько Github Actions (`.github/workflows`):
- `test-report.yml` - В каждом PR запускает unit тесты (jest) и выводит результаты
- `schema.yml` - В каждом PR публикует новый вариант схемы (с названием ветки), сверяет текущую GraphQL схему со схемой в Apollo Studio и падает при eё breaking changes
- `schema-current-publish.yml` - При мерже PR публикует `current` вариант схемы в Apollo Studio

### Secrets

Для корректной работы всех Github Actions необходимо в настройках репозитория назначить следующие секреты:
- `NPM_TOKEN`: Токен от Github Registry, где его взять написано в [@gooditworks/shared](https://github.com/gooditworks/shared#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
- `APOLLO_KEY`: API Ключ от Apollo Studio, можно посмотреть в настройках проекта в Apollo Studio
- `APOLLO_GRAPH_ID`: ID графа в Apollo Studio, можно посмотреть в настройках проекта в Apollo Studio
- `VERCEL_TEAM_ID`: ID организации Vercel
- `VERCEL_TOKEN`: токент от Vercel
