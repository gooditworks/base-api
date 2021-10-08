# Инфраструктура проекта

## Apollo Server

В основе проекта используется [Apollo Server](https://www.apollographql.com/docs/apollo-server), настроенный под запуск в [Vercel](https://vercel.com).

## PlanetScale / Prisma
В качестве основной базы данных в проекте используется DBaaS [PlanetScale](https://planetscale.com) и ORM [Prisma](https://www.prisma.io).

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

Также отдельно лежат stress тесты, имитирующие максимальную нагрузку (`npm run k6:stress:*`), но их опасно запускать на Vercel, он может включить защиту от DDoS.
