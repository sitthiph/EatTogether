const AuthFirebaseService = require('../../../auth/authFirebaseService');
const ForbiddenError = require('../../../errors/forbiddenError');

const schema = `
  authSendEmailAddressVerificationEmail: Boolean
`;

const resolver = {
  authSendEmailAddressVerificationEmail: async (
    root,
    args,
    context,
  ) => {
    if (!context.currentUser) {
      throw new ForbiddenError(context.language);
    }

    await AuthFirebaseService.sendEmailAddressVerificationEmail(
      context.language,
      context.currentUser.email,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
