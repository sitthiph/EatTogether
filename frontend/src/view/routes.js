import Permissions from 'security/permissions';
import { i18n } from 'i18n';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: 'fas fa-home',
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: 'fas fa-user-plus',
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: 'fas fa-history',
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'fas fa-cog',
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/my-order',
    loader: () => import('view/myOrder/list/MyOrderListPage'),
    permissionRequired: permissions.myOrderRead,
    exact: true,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.myOrder.menu'),
    menu: true,
  },
  {
    path: '/my-order/new',
    loader: () => import('view/myOrder/form/MyOrderFormPage'),
    menu: false,
    permissionRequired: permissions.myOrderCreate,
    exact: true,
  },
  {
    path: '/my-order/importer',
    loader: () =>
      import('view/myOrder/importer/MyOrderImporterPage'),
    menu: false,
    permissionRequired: permissions.myOrderImport,
    exact: true,
  },
  {
    path: '/my-order/:id/edit',
    loader: () => import('view/myOrder/form/MyOrderFormPage'),
    menu: false,
    permissionRequired: permissions.myOrderEdit,
    exact: true,
  },
  {
    path: '/my-order/:id',
    loader: () => import('view/myOrder/view/MyOrderViewPage'),
    menu: false,
    permissionRequired: permissions.myOrderRead,
    exact: true,
  },

  {
    path: '/checkout',
    loader: () => import('view/checkout/list/CheckoutListPage'),
    permissionRequired: permissions.checkoutRead,
    exact: true,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.checkout.menu'),
    menu: true,
  },
  {
    path: '/checkout/new',
    loader: () => import('view/checkout/form/CheckoutFormPage'),
    menu: false,
    permissionRequired: permissions.checkoutCreate,
    exact: true,
  },
  {
    path: '/checkout/importer',
    loader: () =>
      import('view/checkout/importer/CheckoutImporterPage'),
    menu: false,
    permissionRequired: permissions.checkoutImport,
    exact: true,
  },
  {
    path: '/checkout/:id/edit',
    loader: () => import('view/checkout/form/CheckoutFormPage'),
    menu: false,
    permissionRequired: permissions.checkoutEdit,
    exact: true,
  },
  {
    path: '/checkout/:id',
    loader: () => import('view/checkout/view/CheckoutViewPage'),
    menu: false,
    permissionRequired: permissions.checkoutRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
