import { ApolloClient, gql } from '@apollo/client';
import cache from './cache';

const typeDefs = gql`
  type Answer {
    # A related URL
    url: String

    # Any related image
    image: String
    answer: String!
    question: String!
  }

  type Query {
    answer(question: String!): Answer!
    answers: [Answer!]!
  }
`;

const client = new ApolloClient({
  cache,
  typeDefs,
  connectToDevTools: process.env.NODE_ENV !== 'production',
});

export default client;
