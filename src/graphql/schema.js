import { gql } from 'apollo-server';
import { postResouvers } from './post/resouvers.js';
import { postTypeDefs } from './post/typedefs.js';
import { userResouvers } from './user/resouvers.js';
import { userTypeDefs } from './user/typedefs.js';

const rootTypeDefs = gql`
  type Query {
    _root: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResouvers, postResouvers];
