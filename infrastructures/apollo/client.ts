import {
  ApolloClient,
  InMemoryCache,
  gql,
  FieldReadFunction,
  FieldFunctionOptions,
  makeVar,
  Reference,
  StoreObject,
  DocumentNode,
} from '@apollo/client';

const typeDefs = gql`
  type Answer {
    question: String!
    answer: String!
    url: String
    image: String
  }

  type Query {
    ask(question: String!): Answer!
  }
`;

function readAsync(
  fn: (_: unknown, o: FieldFunctionOptions) => Promise<StoreObject>,
  fragment: DocumentNode,
): FieldReadFunction {
  return (_, args) => {
    if (!args.storage.var) {
      args.storage.var = makeVar(undefined);

      fn(_, args).then((data) => {
        args.storage.var(data);
        args.cache.writeFragment({
          id: args.cache.identify(data),
          data: data,
          fragment,
        });
      });
    }

    return args.storage.var();
  };
}

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Answer: {
        keyFields: ['question'],
      },
      Query: {
        fields: {
          ask: readAsync(
            async (_, { args }) => {
              console.log(args);
              const response = await fetch('/api/answer', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: args?.question }),
              });

              const answer = await response.json();

              return {
                ...answer,
                url: answer.url ?? null,
                image: answer.image ?? null,
                question: args?.question!,
                __typename: 'Answer',
              };
            },
            gql`
              fragment ANSWER_FRAGMENT on Answer {
                question
                answer
                url
                image
              }
            `,
          ),
        },
      },
    },
  }),
  typeDefs,
  connectToDevTools: true,
});

export default client;
