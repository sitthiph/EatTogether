require("dotenv").config();
const express = require("express");
const path = require ("path");
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');

// Temp db
var db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Starting the server

app.use('/graphql', graphqlHTTP({
  schema: typeDefs,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT);
console.log(`Running a server at localhost:${PORT}}`);
console.log(`Running a GraphQL API server at localhost:${PORT}/data`);

module.exports = app;