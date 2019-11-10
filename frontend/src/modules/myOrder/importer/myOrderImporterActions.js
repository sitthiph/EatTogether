import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/myOrder/importer/myOrderImporterSelectors';
import MyOrderService from 'modules/myOrder/myOrderService';
import fields from 'modules/myOrder/importer/myOrderImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'MYORDER_IMPORTER',
  selectors,
  MyOrderService.import,
  fields,
  i18n('entities.myOrder.importer.fileName'),
);
