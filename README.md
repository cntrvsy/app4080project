# Welcome to APP4080PortfolioProject
This is a project done for the APP4080 (A collaboration class).
It is to show case the group members Portfolios, which include github(using the github API) and something small about themselves.
# visit the site
powered by Vercel and Supabase [`APP4080PortfolioProject`](https://app4080project.vercel.app/).

## Running the project Locally
this project was built using NodeJs version 18.
all you need is one thing, the Environment Variables!
for this project to work you will need Supabase credentials, supabase anon key (each provided when creating your own supabase instance) and a Fine Grain Token from your gtihub for the graphQL.

```bash
# clone the project
```

## Developing

Once you've cloned the project and installed dependencies with `npm install`  start a development server:

```bash
npm run dev

```

## Building

To create a production version of your app:

```bash
npm run build // this will build a version that runs on vercel
```

You can preview the production build with `npm run preview`.

> Take note that project is configured to build to vercel. here is the adapter docs.[adapter](https://kit.svelte.dev/docs/adapter-vercel).