/**
 * A type helper to create branded (or tagged) types.
 */
type Brand<Type, Name extends string> = Type & {
  readonly __name?: Name;
};

export default Brand;
