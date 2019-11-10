import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.checkout.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  userName: new StringField('userName', label('userName'), {}),
  pictures: new ImagesField('pictures', label('pictures'), 'checkout/pictures',{}),
  orderList: new StringField('orderList', label('orderList'), {}),
  apiKeyRestaurant: new StringField('apiKeyRestaurant', label('apiKeyRestaurant'), {}),
  apiKeysFood: new StringField('apiKeysFood', label('apiKeysFood'), {}),
  foodName: new StringField('foodName', label('foodName'), {}),
  foodDesc: new StringField('foodDesc', label('foodDesc'), {}),
  foodCount: new IntegerField('foodCount', label('foodCount'), {}),
  baseCost: new DecimalField('baseCost', label('baseCost'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  foodCountRange: new IntegerRangeField(
    'foodCountRange',
    label('foodCountRange'),
  ),
  baseCostRange: new DecimalRangeField(
    'baseCostRange',
    label('baseCostRange'),
  ),
};

export default {
  fields,
};
