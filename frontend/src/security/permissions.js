import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,


        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      myOrderImport: {
        id: 'myOrderImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.myOrderEditor,
        ],
      },
      myOrderCreate: {
        id: 'myOrderCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.myOrderEditor,
        ],
        allowedStorageFolders: ['myOrder'],
      },
      myOrderEdit: {
        id: 'myOrderEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.myOrderEditor,
        ],
        allowedStorageFolders: ['myOrder'],
      },
      myOrderDestroy: {
        id: 'myOrderDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.myOrderEditor,
        ],
        allowedStorageFolders: ['myOrder'],
      },
      myOrderRead: {
        id: 'myOrderRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.myOrderEditor,
          roles.myOrderViewer,
        ],
      },
      myOrderAutocomplete: {
        id: 'myOrderAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.myOrderEditor,
          roles.myOrderViewer,

        ],
      },

      checkoutImport: {
        id: 'checkoutImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.checkoutEditor,
        ],
      },
      checkoutCreate: {
        id: 'checkoutCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.checkoutEditor,
        ],
        allowedStorageFolders: ['checkout'],
      },
      checkoutEdit: {
        id: 'checkoutEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.checkoutEditor,
        ],
        allowedStorageFolders: ['checkout'],
      },
      checkoutDestroy: {
        id: 'checkoutDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.checkoutEditor,
        ],
        allowedStorageFolders: ['checkout'],
      },
      checkoutRead: {
        id: 'checkoutRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.checkoutEditor,
          roles.checkoutViewer,
        ],
      },
      checkoutAutocomplete: {
        id: 'checkoutAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.checkoutEditor,
          roles.checkoutViewer,

        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
