import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [Users!]!
    }
    type User {
      id: ID
      name: String
      age: Int
    }
    type Users {
      id: ID
      name: String
      age: Int
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'abcd-123',
          name: 'Jonatas',
          age: 21,
        };
      },
      users: () => {
        return [
          {
            id: 'abcd-123',
            name: 'Jonatas',
            age: 21,
          },
          {
            id: 'abcd-121',
            name: 'Henrique',
            age: 21,
          },
          {
            id: 'abcd-125',
            name: 'Nicolas',
            age: 21,
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
