import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/checkout/importer/checkoutImporterSelectors';
import CheckoutService from 'modules/checkout/checkoutService';
import fields from 'modules/checkout/importer/checkoutImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'CHECKOUT_IMPORTER',
  selectors,
  CheckoutService.import,
  fields,
  i18n('entities.checkout.importer.fileName'),
);
