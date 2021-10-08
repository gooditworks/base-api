# Gooditworks Base GraphQL API

Базовый проект API, на основе которого создаются GraphQL API

## Состав проекта

### Наследовано от base
- TypeScript
- Unit тесты (jest)
- Конфигурация Eslint / Prettier
- Git хуки (lefthook)
- commitzen / commitlint

### Дополнительно
- Apollo Server
- PlanetScale
- Prisma
- k6

## Документация
- [Инструкции по разработке](docs/guides.md)
  - Локальный запуск
  - Релиз новой версии
  - Проверка и обновление base
  - Изменение схемы базы данных (миграция)
  - Локальный запуск тестов производительности k6
- [Список env переменных](docs/env.md)
- [Краткое описание инфраструктуры](docs/infrastructure.md)