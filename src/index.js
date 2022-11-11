import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema.js';
import { context } from './graphql/context.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: context,
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
