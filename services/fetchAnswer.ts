import type Answer from '../models/Answer';

const API_URL = 'https://api.m3o.com/v1/answer/Question';

async function fetchAnswer(question: string): Promise<Answer> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.M3O_API_KEY!}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question,
    }),
  });

  return response.json();
}

export default fetchAnswer;
