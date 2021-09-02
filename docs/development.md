# Локальный запуск и разработка

## Запуск
1. Выполнить требования из [@gooditworks/shared](https://github.com/gooditworks/shared#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
2. Установить зависимости: `npm install`
3. Запуск локального development сервера: `npm run dev`
4. Сборка Typescript: `npm run build`
5. Запуск тестов (jest): `npm run test`
6. Запуск линтеров: `npm run lint`
3. Development запуск: `npm start`

## Релиз новой версии
1. Закоммитить изменения согласно [Conventional commits](https://www.conventionalcommits.org)
2. Проверить код: `npm run lint && npm run test`
3. Не бампая версию вручную, запустить `standard-version`: `npm run release`
4. Запушить созданный changelog: `git push`

## Env переменные

Для полноценной работы приложения необходимо заполнить следующие env переменные (через командную строку или `.env` файл):

- Заготовка уже есть в файле `.env.example`, его можно просто переименовать в `.env` и заполнить.
- Также в файле `src/env.ts` необходимо изменить `logdnaApp` на имя приложения, которое будет показываться в logDNA.

```
LOG_LEVEL=<"trace" | "debug" | "info" | "warn" | "error" | "fatal"> (по-умолчанию "trace")
SENTRY_DSN=<DSN URL от Sentry>
LOGDNA_KEY=<ключ от logDNA>
APOLLO_EXPLORER=<"true" включает локальный GraphQL Explorer, в Production Vercel должен быть выключен>
APOLLO_INTROSPECTION=<"true" включает интроспекцию, в Production Vercel должен быть выключен>
```

Для полноценной интеграции с Apollo Studio также необходимо проставить ещё пару переменных только в Vercel (только в Production сборках):

```
APOLLO_KEY=<ключ от Apollo Studio>
APOLLO_GRAPH_ID=<ID графа в Apollo Studio>
```

Подробнее о Apollo Studio и его фичах можно почитать в [infrastructure.md](docs/infrastructure.md#Apollo%20Studio).

### Файл `src/env.ts`

В этом файле (и только в нём) производится чтение env перменных всего приложения, а уже из него они пробрасываются дальше. То есть чтение `process.env` вне этого файла запрещено.
