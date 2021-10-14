import { ChangeEvent, FormEvent, useState } from 'react';
import type Answer from '../models/Answer';
import fetchAnswer from '../services/fetchAnswer';

function Index() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<null | Answer>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuestion(event.target.value);
  };

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
      <input
        type="text"
        value={question}
        onChange={handleChange}
      />

      {answer && (
        <div>
          {answer.image && <img src={answer.image} alt="" />}
          <p>{answer.answer}</p>
          {answer.url && (
            <a href={answer.url} target="_blank" rel="noopener noreferrer">
              See more
            </a>
          )}
        </div>
      )}
    </form>
  );
}

export default Index;
