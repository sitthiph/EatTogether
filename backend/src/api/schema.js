/**
 * Maps all the Schema of the application.
 * More about the schema: https://www.apollographql.com/docs/graphql-tools/generate-schema/
 */

const makeExecutableSchema = require('graphql-tools')
  .makeExecutableSchema;
const resolvers = require('./resolvers');

const sharedTypes = require('./shared/types');

const settingsTypes = require('./settings/types');
const settingsQueries = require('./settings/queries');
const settingsMutations = require('./settings/mutations');

const authTypes = require('./auth/types');
const authQueries = require('./auth/queries');
const authMutations = require('./auth/mutations');

const iamTypes = require('./iam/types');
const iamQueries = require('./iam/queries');
const iamMutations = require('./iam/mutations');

const auditLogTypes = require('./auditLog/types');
const auditLogQueries = require('./auditLog/queries');
const auditLogMutations = require('./auditLog/mutations');

const myOrderTypes = require('./myOrder/types');
const myOrderQueries = require('./myOrder/queries');
const myOrderMutations = require('./myOrder/mutations');

const checkoutTypes = require('./checkout/types');
const checkoutQueries = require('./checkout/queries');
const checkoutMutations = require('./checkout/mutations');

const types = [
  ...sharedTypes,
  ...iamTypes,
  ...authTypes,
  ...auditLogTypes,
  ...settingsTypes,
  ...myOrderTypes,
  ...checkoutTypes,
].map((type) => type.schema);

const mutations = [
  ...iamMutations,
  ...authMutations,
  ...auditLogMutations,
  ...settingsMutations,
  ...myOrderMutations,
  ...checkoutMutations,
].map((mutation) => mutation.schema);

const queries = [
  ...iamQueries,
  ...authQueries,
  ...auditLogQueries,
  ...settingsQueries,
  ...myOrderQueries,
  ...checkoutQueries,
].map((query) => query.schema);

const query = `
  type Query {
    ${queries.join('\n')}
  }
`;

const mutation = `
  type Mutation {
    ${mutations.join('\n')}
  }
`;

const schemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [schemaDefinition, query, mutation, ...types],
  resolvers,
});
