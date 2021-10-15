import type URL from './URL';

/**
 * The answer representation.
 * @see {@link https://m3o.com/answer/api} for more information.
 */
type Answer = {
  /** A related URL. */
  url: null | URL;

  /** Any related image. */
  image: null | URL;
  answer: string;
  question: string;
};

export default Answer;
