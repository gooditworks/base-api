# Инструкции по разработке

## Локальный запуск
1. Выполнить требования из [@gooditworks/shared](https://github.com/gooditworks/shared#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
2. Установить зависимости: `npm install`
3. Установить env переменные согласно [`docs/env.md`](docs/env.md)
4. Запуск локального development сервера:
   - `nodemon`, запускающий только Apollo Server: `npm run dev:local`
   - `vercel dev`, полноценно эмулирующий инфраструктуру Vercel: `npm run dev:vercel`
5. Запуск тестов (jest): `npm run test`
6. Запуск линтеров: `npm run lint`
7. Production сборка: `npm run build`

## Релиз новой версии
1. Закоммитить изменения согласно [Conventional commits](https://www.conventionalcommits.org)
2. Проверить код: `npm run lint && npm run test`
3. Не бампая версию вручную, запустить `standard-version`: `npm run release`
4. Запушить созданный changelog: `git push`

## Проверка и обновление base
1. Запустить команду для проверки: `npm run lint:base`
2. Произвести merge изменений: `git merge base/main`

Если при merge произошли конфликты, исправить их и закомитить. При большом количестве конфликтов в файле `package-lock.json` запустить `npm install --package-lock-only`

## Изменение схемы базы данных (миграция)

Для миграции необходим глобально установленный и авторизованный [PlanetScale CLI](https://docs.planetscale.com/reference/planetscale-environment-setup).

1. Изменить схему базы данных в файле `prisma/schema.prisma`
2. Мигровать эту схему и создать Deploy request в PlanetScale: `npm run migrate`
3. Приложить ссылку на созданный Deploy request в описание PR
4. Перед релизом применить этот Deploy request

Если после создания Deploy request необходимо изменить схему ещё раз:
1. Ещё раз изменить схему базы данных в файле `prisma/schema.prisma`
2. Мигрировать схему без создания Deploy request: `npm run prisma:migrate`

## Локальный запуск тестов производительности k6

1. Установить [k6](https://k6.io/docs/getting-started/installation/)
2. Запустить тест стабильности: `npm run k6 --url=https://base-api-gooditworks.vercel.app` (или любой другой URL)

Также в репозитории есть стресс-тесты (`k6:stress:empty`, `k6:stress:realistic`, `k6:stress:slow`), которые запускаются аналогичным способом, но их не рекомендуется запускать на Vercel деплоях, так как он может включить защиту от DDoS.