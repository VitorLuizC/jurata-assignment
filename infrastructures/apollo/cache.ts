import { InMemoryCache, gql } from '@apollo/client';
import Answer from '../../models/Answer';
import readAsync from './readAsync';

const ANSWER_FRAGMENT = gql`
  fragment ANSWER_FRAGMENT on Answer {
    question
    answer
    url
    image
  }
`;

const cache = new InMemoryCache({
  typePolicies: {
    Answer: {
      keyFields: ['question'],
    },
    Query: {
      fields: {
        ask: readAsync(async (_, options) => {
          const question = options.args?.question ?? '';

          const response = await fetch('/api/answer', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
          });

          const answer: Answer = await response.json();

          return {
            ...answer,
            __typename: 'Answer',
          };
        }, ANSWER_FRAGMENT),
      },
    },
  },
});

export default cache;
