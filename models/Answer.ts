/** @see {@link https://m3o.com/answer/api} for more information. */
type Answer = {
  /** The answer to your question. */
  answer: string;

  /** Any related image. */
  image?: string;

  /** A related URL. */
  url?: string;
};

export default Answer;
