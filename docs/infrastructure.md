# Инфраструктура проекта

В основе проекта используется [Apollo Server](https://www.apollographql.com/docs/apollo-server), настроенный под запуск в [Vercel](https://vercel.com).

## Github Actions

В проекте используются несколько Github Actions (`.github/workflows`):
- `test-report.yml` - В каждом PR запускает unit тесты (jest) и выводит результаты
- `schema-check.yml` - В каждом PR сверяет текущую GraphQL схему со схемой в Apollo Studio и падает при eё breaking changes
- `schema-publish.yml` - При мерже (пуше) в ветку `main` публикует текущую схему в Apollo Studio

### Secrets

Для корректной работы всех Github Actions необходимо в настройках репозитория назначить следующие секреты:

#### `NPM_TOKEN`

Токен от Github Registry, где его взять написано в [@gooditworks/shared](https://github.com/gooditworks/shared#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5).

#### `APOLLO_KEY`

API Ключ от Apollo Studio, можно посмотреть в настройках проекта.

#### `APOLLO_GRAPH_ID`

ID графа в Apollo Studio, можно посмотреть в настройках проекта.

## Файловая структура

#### `api/index.ts`
Файл Vercel API Route, который запускает Apollo Server.

#### `src/mutations`
Каталог с мутациями GraphQL.

#### `src/resolvers`
Каталог с резолверами GraphQL.

#### `src/typeDefs`
Каталог с схемой GraphQL.

##### `src/typeDefs/index.ts`
Синхронно читает .graphql файлы со схемой и преобразует их в формат понятный Apollo Server.

#### `src/server.ts`
Файл с настройкой и инициализацией Apollo Server.

#### `src/dev-server.ts`
Development сервер, который запускается через `npm run dev`.

#### `src/types.ts`
Файл с типами из GraphQL, сгенерированный [graphql-codegen](https://www.graphql-code-generator.com), генерация через `npm run codegen`.