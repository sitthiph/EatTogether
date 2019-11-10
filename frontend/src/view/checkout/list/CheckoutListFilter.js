import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/checkout/list/checkoutListActions';
import selectors from 'modules/checkout/list/checkoutListSelectors';
import model from 'modules/checkout/checkoutModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import ButtonIcon from 'view/shared/ButtonIcon';
import FilterWrapper from 'view/shared/styles/FilterWrapper';
import InputRangeFormItem from 'view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'view/shared/form/items/InputNumberRangeFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.id,
  fields.userName,
  fields.orderList,
  fields.apiKeyRestaurant,
  fields.apiKeysFood,
  fields.foodName,
  fields.foodCountRange,
  fields.baseCostRange,
]);

class CheckoutListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.id.name}
                        label={fields.id.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.userName.name}
                        label={fields.userName.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.orderList.name}
                        label={fields.orderList.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.apiKeyRestaurant.name}
                        label={fields.apiKeyRestaurant.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.apiKeysFood.name}
                        label={fields.apiKeysFood.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.foodName.name}
                        label={fields.foodName.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputNumberRangeFormItem
                        name={
                          fields.foodCountRange.name
                        }
                        label={
                          fields.foodCountRange.label
                        }
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name={fields.baseCostRange.name}
                        label={fields.baseCostRange.label}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 filter-buttons">
                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      <ButtonIcon
                        loading={loading}
                        iconClass="fas fa-search"
                      />{' '}
                      {i18n('common.search')}
                    </button>
                    <button
                      className="btn btn-light"
                      type="button"
                      onClick={() =>
                        this.handleReset(form)
                      }
                    >
                      <ButtonIcon
                        loading={loading}
                        iconClass="fas fa-undo"
                      />{' '}
                      {i18n('common.reset')}
                    </button>
                  </div>
                </div>
              </form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
  };
}

export default withRouter(connect(select)(CheckoutListFilter));
