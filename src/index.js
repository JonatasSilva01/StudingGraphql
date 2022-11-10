import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      average: Float
      married: Boolean
      car: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => 'asdvf-1',
      name: () => 'Jonatas Silva',
      age: () => 21,
      average: () => 50.55,
      married: () => false,
      car: () => ['gol-bolinha', 'gol-quadrado'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
