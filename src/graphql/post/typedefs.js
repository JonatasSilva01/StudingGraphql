import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post: Post!
    posts: [Posts!]!
  }

  type Post {
    id: ID!
    title: String!
    page: Int!
  }

  type Posts {
    id: ID!
    title: String!
    page: Int!
  }
`;
