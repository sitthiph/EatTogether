const AuthFirebaseService = require('../../../auth/authFirebaseService');

const schema = `
  authSendPasswordResetEmail(email: String!): Boolean
`;

const resolver = {
  authSendPasswordResetEmail: async (
    root,
    args,
    context,
  ) => {
    await AuthFirebaseService.sendPasswordResetEmail(
      context.language,
      args.email,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
