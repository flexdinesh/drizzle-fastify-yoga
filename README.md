# Example REST/GraphQL

This is a learning repo to build a simple REST/GraphQL API with data from SQLite database.

## Stack

- [Fastify server](https://fastify.dev/)
- [SQLite database with Drizzle ORM BetterSqlite3 adapter](https://orm.drizzle.team/docs/get-started-sqlite#better-sqlite3)
- [GraphQL Yoga server served as a fastify endpoint](https://the-guild.dev/graphql/yoga-server/docs)
- Database is initialised with a base schema and seeded with data using [faker](https://fakerjs.dev/guide/)

## Where do I start?

- Explore the scripts in [package.json](/package.json)
- `npm run dev` starts the server. Explore the available REST and GraphQL endpoints.
- Explore [drizzle.config.ts](/drizzle.config.ts) to learn how [database schema](./src/db/schema.ts) is setup. If you change the schema, remember to run `npm run generate:migration` to generate the migration files and then `npm run migrate` to apply the migrations to the database.
- Explore [the seeding script](./scripts/seed.ts) to learn how the database is seeded. This is already run but if you delete the database file, you should run it again.
- [/rest/users](./src/routes/rest/users.ts) is an example endpoint
- [/graphql](./src/routes/graphql.ts) is the graphql endpoint with an [example schema](./src/schema/schema.ts)

Go crazy. 🚀
