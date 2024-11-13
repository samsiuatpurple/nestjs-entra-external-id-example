## Overview
This repo provides an example for the following
1. A client SPA (React) - sign in against Microsoft Entra External ID Tenant (token flow)
1. A backend REST api endpoint that secured by jwt-based authentication from the MS Entra External ID Tenant


## Getting started

### 1. Set up your node environment
1. It is recommended to install [nvm](https://github.com/nvm-sh/nvm)
1. Use node v23.1.0

### 2. Set up the Entra External ID tenant
1. Set up a Entra [External ID tenant](https://learn.microsoft.com/en-us/entra/external-id/customers/overview-customers-ciam)
1. You may want to set up [Google as an identity provider as well](https://learn.microsoft.com/en-us/entra/external-id/customers/how-to-google-federation-customers)

### 3. Set up app registrations
1. Follow these [instructions](https://learn.microsoft.com/en-us/entra/external-id/customers/sample-web-app-node-sign-in) to set up an app registration for the client SPA (e.g. `ciam-client-app`). 
1. Follow these [instructions](https://learn.microsoft.com/en-us/entra/external-id/customers/sample-web-app-node-sign-in-call-api) to set up an app registration for the backend api app (e.g. `ciam-ToDoList-api.`). Be aware that you define the scopes in this app registration, and you grant consent of using them for the client SPA app registration. 
1. Read the `README.md` in the api-server, and client-spa folders, to set up the `.env` files.


