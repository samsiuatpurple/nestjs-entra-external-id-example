## Overview
This project is created using [nest cli](https://docs.nestjs.com/cli/overview). 
We implement a [passport](https://www.passportjs.org/) strategy called `AzureADStrategy`, which uses the [MS Azure Active Directory Passport.js plugin](https://www.passportjs.org/packages/passport-azure-ad/). This strategy is then used to secure the api endpoint (`app.controller.protected`). 

## Getting started
1. Make a copy of `.env.example` and change the name to `.env`
2. Get the values from your Entra External ID tenant for the `.env` file. N.B. `AZURE_ENTRA_CLIENT_ID` should be the ID of the app registration in Entra where the `scopes` are defined, i.e. the api app.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
