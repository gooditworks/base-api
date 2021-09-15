# Инфраструктура проекта

В основе проекта используется [Apollo Server](https://www.apollographql.com/docs/apollo-server), настроенный под запуск в [Vercel](https://vercel.com).

## Github Actions

В проекте используются несколько Github Actions (`.github/workflows`):
- `test-report.yml` - В каждом PR запускает unit тесты (jest) и выводит результаты
- `schema.yml` - В каждом PR публикует новый вариант схемы (с названием ветки), сверяет текущую GraphQL схему со схемой в Apollo Studio и падает при eё breaking changes
- `schema-current-publish.yml` - При мерже PR публикует `current` вариант схемы в Apollo Studio

### Secrets

Для корректной работы всех Github Actions необходимо в настройках репозитория назначить следующие секреты:

#### `NPM_TOKEN`

Токен от Github Registry, где его взять написано в [@gooditworks/shared](https://github.com/gooditworks/shared#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5).

#### `APOLLO_KEY`

API Ключ от Apollo Studio, можно посмотреть в настройках проекта в Apollo Studio.

#### `APOLLO_GRAPH_ID`

ID графа в Apollo Studio, можно посмотреть в настройках проекта в Apollo Studio.

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

## Apollo Studio

[Apollo Studio](https://www.apollographql.com/docs/studio) это сервис от Apollo, который помогает в разработке и поддержке GraphQL API. Его основные фичи:

- Репозиторий GraphQL схем и их версий (ревизий),
- Удобный GraphQL Explorer с документацией,
- Отслеживание различных метрик,
- Проверка схемы на breaking changes,
- [и другие](https://www.apollographql.com/docs/studio/#studio-features).

Для подключения нужно создать проект в Apollo Studio и добавить [env переменные](docs/development.md#Env%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5) и секреты Github репозитория: `APOLLO_KEY` и `APOLLO_GRAPH_ID`.

## Стресс тесты с помощью k6

В проект интегрированы стресс тесты на основе [k6](https://k6.io). Для их запуска необходим локально [установленный k6](https://k6.io/docs/getting-started/installation). Cкрипты лежат в папке `/k6` и запускаются с помощью npm команды `k6` с ключом `--url`, например:
```
$ npm run k6 --url=https://base-api-gooditworks.vercel.app
```
