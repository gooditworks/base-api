# Инфраструктура проекта

В основе проекта используется [Apollo Server](https://www.apollographql.com/docs/apollo-server), настроенный под запуск в [Vercel](https://vercel.com).

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