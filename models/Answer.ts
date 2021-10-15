import type URL from './URL';

/**
 * The answer representation.
 * @see {@link https://m3o.com/answer/api} for more information.
 */
type Answer = {
  /** The answer to your question. */
  answer: string;

  /** Any related image. */
  image?: URL;

  /** A related URL. */
  url?: URL;
};

export default Answer;
