import { FormEvent, useState } from 'react';
import AnswerCard from '../components/AnswerCard';
import QuestionInput from '../components/QuestionInput';
import type Answer from '../models/Answer';

function Index() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<null | Answer>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await fetch('/api/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      setAnswer(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuestionInput value={question} onChange={setQuestion} />

      {answer && <AnswerCard answer={answer} question={question} />}
    </form>
  );
}

export default Index;
