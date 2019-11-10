import list from 'modules/checkout/list/checkoutListReducers';
import form from 'modules/checkout/form/checkoutFormReducers';
import view from 'modules/checkout/view/checkoutViewReducers';
import destroy from 'modules/checkout/destroy/checkoutDestroyReducers';
import importerReducer from 'modules/checkout/importer/checkoutImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
