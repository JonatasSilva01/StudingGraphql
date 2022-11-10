import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user: User!
    users: [Users!]!
  }

  type User {
    id: ID!
    userName: String!
    age: Int!
  }

  type Users {
    id: ID!
    userName: String!
    age: Int!
  }
`;
