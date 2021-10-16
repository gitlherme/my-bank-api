# My Bank API

A simple express application for IGTI API Development class.


## ⚙️ Installation

- Clone this repository
- Run `npm install` to install project dependencies
- Run `npm run dev` to start a local server.

## 🚩 Endpoints
```

Create a new account: [POST] /accounts

  Example
  - Request body: { "name": "John Doe", "balance": 1000 }
  - Response body: 201 Created


Get an account: [GET] /accounts/:id

  Example
  - Request params: 1
  - Response body: { "balance": 1000 }


Make a new deposit: [PATCH] /accounts/deposit/:id

  Example
  - Request params: 1
  - Request body: { "amount": 100 }
  - Response body: { "balance": 1100 }


Make a new withdraw: [PATCH] /accounts/withdraw/:id

  Example
  - Request params: 1
  - Request body: { "amount": 100 }
  - Response body: { "balance": 900 }


Delete an account: [DELETE] /accounts/:id

  Example
  - Request params: 1
  - Response body: 204 No Content
```



