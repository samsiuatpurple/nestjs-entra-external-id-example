## Overview
- This is a copy from [Microsoft Identity CIAM Javascript Tutorial](https://github.com/Azure-Samples/ms-identity-ciam-javascript-tutorial)
- The app is based [1-Authentication/1-sign-in-react](https://github.com/Azure-Samples/ms-identity-ciam-javascript-tutorial/tree/main/1-Authentication/1-sign-in-react)

## Getting started

1. Duplicate the `.env.example` file, and rename it to `.env`
1. Find the values from your Entra External ID tenant, and put them into the `.env` file. N.B. `REACT_APP_AZURE_ENTRA_CLIENT_ID` should be the one of the app registration you created for the client SPA.
1. We only ask for one scope for simplification purpose. So you only need to put a scope ID into the `.env` file.

## Running
1. You need to have the api-server running
2. Run the app (just `npm start`, or if you want to debug, add a launch.json that fits your purpose)
3. Sign up. 
4. Once signed in, you will find `Read Protected Contents` from the top bar. Just click it and it will read from a protected API endpoint. It will show `protected contents read from api: protected` in the middle of the screen.
