import { makeExecutableSchema } from "@graphql-tools/schema";
import { getUsers } from "../db/users.js";

const typeDefs = /* GraphQL */ `
  type User {
    id: ID!
    firstName: String!
    fullName: String!
    lastName: String!
    createdAt: String
  }

  # the schema allows the following query:
  type Query {
    users: [User]
    hello(name: String): String
  }

  # this schema allows the following mutation:
  type Mutation {
    doSomething(something: String!): String
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      const users = await getUsers();
      return users;
    },
    hello: (_, args) => {
      return `hello, ${args?.name || "World"}`;
    },
  },

  Mutation: {
    doSomething: (_, { something }) => {
      return `${something} successful!`
    },
  },

  User: {
    fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
    createdAt: (parent) => parent.createdAt?.toISOString(),
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
