// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Answer from '../../models/Answer';
import fetchAnswer from '../../services/fetchAnswer'

function resolveErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return String(error);
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | Answer>
) {
  const question = req.body.question;

  if (typeof question !== 'string' || !question.trim()) {
    res.status(401).send("The 'question' argument is empty or not a string.");
    return;
  }

  try {
    const answer = await fetchAnswer(req.body.question);

    res.status(200).json({
      url: answer.url ?? null,
      image: answer.image ?? null,
      answer: answer.answer,
      question: question.trim(),
    });
  } catch (error) {
    res.status(500).send(resolveErrorMessage(error));
  }
}

export default handler;
