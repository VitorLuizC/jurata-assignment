## Getting Started

### Micro API Key

This application uses Answer API from Micro to answer your questions, because of it its required to generate an API key and setup it as environment variable.

1. Create an account at Micro using in the link below:
   https://m3o.com/register

2. Generate an API key with "answer" scope in the link below:
   https://m3o.com/settings/keys

3. You can export your generated Micro API key using `MICRO_API_KEY` environment variable.

   ```sh
   export MICRO_API_KEY="{{your generated Micro API key}}"
   ```

   Or copy `.env.local.example` as `.env.local`, and set your generated Micro API key as `MICRO_API_KEY` value.

### Running Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. Install dependencies using Yarn:

   ```bash
   yarn
   ```


2. Run the development server:

   ```bash
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
