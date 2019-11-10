module.exports = {
  env: 'production',

  /**
   * Configuration to allow email sending used on:
   * backend/src/services/shared/email/emailSender.js
   *
   * More info: https://nodemailer.com
   */
  email: {
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl: 'https://<insert project id here>.firebaseapp.com',


  /**
   * Enables GraphiQL
   * See: https://github.com/graphql/graphiql
   */
  graphiql: false,

};
