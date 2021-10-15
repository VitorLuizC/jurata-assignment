import { FormEvent, useState } from 'react';
import AnswerCard from '../components/AnswerCard';
import QuestionInput from '../components/QuestionInput';
import useAnswer from '../hooks/useAnswer';

function Index() {
  const [question, setQuestion] = useState('');

  const { answer, getAnswer } = useAnswer();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    getAnswer(question);
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuestionInput value={question} onChange={setQuestion} />

      {answer && <AnswerCard answer={answer} question={answer.question} />}
    </form>
  );
}

export default Index;
