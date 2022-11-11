import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts: [Posts!]!
  }

  # type Post {
  #   id: ID!
  #   title: String!
  #   page: Int!
  # }

  type Post {
    id: ID!
    title: String!
    body: String!
    # userId: [users!]!
    indexRef: Int!
    createdAt: String!
  }

  type Posts {
    id: ID!
    title: String!
    body: String!
    # userId: [users!]!
    indexRef: Int!
    createdAt: String!
  }
`;
