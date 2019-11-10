const express = require('express');
const cors = require('cors');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const config = require('../../config')();
const authFirebaseService = require('../auth/authFirebaseService');
const authMiddleware = require('../auth/authMiddleware');
const {
  init: databaseInit,
  middleware: databaseMiddleware,
} = require('../database/databaseInit');
const helmet = require('helmet');

// Enables CORS
app.use(cors({ origin: true }));

// Enables Helmet, a set of tools to
// increase security.
app.use(helmet());

// Initializes the Database
databaseInit().catch((error) => console.error(error));

// Initializes Firebase Authentication
authFirebaseService.init();

// Sets up the GraphQL endpoint
app.use(
  '/',
  databaseMiddleware,
  authMiddleware,
  graphqlHTTP((req) => ({
    schema,

    graphiql: config.graphiql,

    context: {
      currentUser: req.currentUser,
      language: req.headers['accept-language'] || 'en',
    },

    formatErrorFn(error) {
      if (process.env.NODE_ENV !== 'test') {
        console.error(error);
      }

      return {
        message: error.message,
        code:
          error.originalError && error.originalError.code,
        locations: error.locations,
        path: error.path,
      };
    },
  })),
);

module.exports = app;
