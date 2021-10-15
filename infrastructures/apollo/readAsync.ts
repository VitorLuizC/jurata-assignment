import {
  DocumentNode,
  FieldFunctionOptions,
  FieldReadFunction,
  makeVar,
  StoreObject,
} from '@apollo/client';

type FieldReadAsyncFunction<Data extends StoreObject> = (
  existing: undefined | Readonly<Data>,
  options: FieldFunctionOptions,
) => Promise<Data>;

/**
 * Creates async read type policies for a field.
 * @see {@link https://github.com/apollographql/apollo-client/issues/6852#issuecomment-687091462}
 */
function readAsync<Data extends StoreObject>(
  read: FieldReadAsyncFunction<Data>,
  fragment: DocumentNode,
): FieldReadFunction<Data> {
  return (existing, options) => {
    if (!options.storage.var) {
      options.storage.var = makeVar(undefined);

      read(existing, options).then((data) => {
        options.storage.var(data);

        options.cache.writeFragment({
          id: options.cache.identify(data),
          data,
          fragment,
        });
      });
    }

    return options.storage.var();
  };
}

export default readAsync;
