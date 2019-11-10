import list from 'modules/myOrder/list/myOrderListReducers';
import form from 'modules/myOrder/form/myOrderFormReducers';
import view from 'modules/myOrder/view/myOrderViewReducers';
import destroy from 'modules/myOrder/destroy/myOrderDestroyReducers';
import importerReducer from 'modules/myOrder/importer/myOrderImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
