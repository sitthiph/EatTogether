import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';

function label(name) {
  return i18n(`entities.myOrder.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  apiKeyRestaurant: new StringField('apiKeyRestaurant', label('apiKeyRestaurant'), {}),
  restaurantName: new StringField('restaurantName', label('restaurantName'), {}),
  apiKeysFood: new StringField('apiKeysFood', label('apiKeysFood'), {}),
  foodName: new StringField('foodName', label('foodName'), {}),
  quantity: new IntegerField('quantity', label('quantity'), {}),
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
  quantityRange: new IntegerRangeField(
    'quantityRange',
    label('quantityRange'),
  ),
};

export default {
  fields,
};
