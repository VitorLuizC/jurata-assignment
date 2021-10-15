import { gql, useLazyQuery } from '@apollo/client';
import type Answer from '../models/Answer';

const ANSWER_QUERY = gql`
  query ANSWER_QUERY($question: String!) {
    answer(question: $question) {
      url
      image
      answer
      question
    }
  }
`;

type AnswerData = {
  answer: Answer;
};

type AnswerVariables = {
  question: string;
};

function useAnswer() {
  const [executeQuery, { data, error, loading }] = useLazyQuery<
    AnswerData,
    AnswerVariables
  >(ANSWER_QUERY, {
    fetchPolicy: 'cache-only',
    nextFetchPolicy: 'cache-only',
  });

  const getAnswer = (question: string): void => {
    executeQuery({
      variables: {
        question,
      },
    });
  };

  return {
    error,
    answer: data?.answer ?? null,
    loading,
    getAnswer,
  };
}

export default useAnswer;
