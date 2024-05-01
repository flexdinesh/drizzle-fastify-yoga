import fastify from "fastify";
import graphqlRoute from "./routes/graphql.js";
import usersRoutes from "./routes/rest/users.js";

const server = fastify({
  ignoreTrailingSlash: true,
  logger: {
    transport: {
      target: "@fastify/one-line-logger",
      options: {
        colorize: true,
      },
    },
  },
});

server.get("/", async (request, reply) => {
  return "Your server works!";
});

server.get("/health", async (request, reply) => {
  return { status: "ok" };
});

server.register(usersRoutes);
server.register(graphqlRoute);

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`API server listening at ${address}`);
});
