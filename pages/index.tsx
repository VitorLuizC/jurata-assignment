import { gql, useLazyQuery } from '@apollo/client';
import { FormEvent, useState } from 'react';
import AnswerCard from '../components/AnswerCard';
import QuestionInput from '../components/QuestionInput';
import type Answer from '../models/Answer';

const ASK_QUERY = gql`
  query ASK_QUERY($question: String!) {
    ask(question: $question) {
      question
      answer
      image
      url
    }
  }
`;

function Index() {
  const [ask, {data}] = useLazyQuery<{
    ask: {
      question: string;
      answer: string;
      image: string;
      url: string;
    }
  }>(ASK_QUERY, {
    fetchPolicy: 'cache-only',
    nextFetchPolicy: 'cache-only',
  });
  const [question, setQuestion] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();

    ask({
      variables: {
        question,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuestionInput value={question} onChange={setQuestion} />

      {data?.ask && <AnswerCard answer={data.ask} question={data.ask.question} />}
    </form>
  );
}

export default Index;
