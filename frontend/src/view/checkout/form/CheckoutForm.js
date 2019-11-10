import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/checkout/checkoutModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import ButtonIcon from 'view/shared/ButtonIcon';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'view/shared/form/items/InputNumberFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';

const { fields } = model;

class CheckoutForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.userName,
    fields.pictures,
    fields.orderList,
    fields.apiKeyRestaurant,
    fields.apiKeysFood,
    fields.foodName,
    fields.foodDesc,
    fields.foodCount,
    fields.baseCost,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <InputFormItem
                  name={fields.userName.name}
                  label={fields.userName.label}
                  required={fields.userName.required}
                  autoFocus
                />
                <ImagesFormItem
                  name={fields.pictures.name}
                  label={fields.pictures.label}
                  required={fields.pictures.required}
                  path={fields.pictures.path}
                  schema={{
                    size: fields.pictures.size,
                  }}
                  max={fields.pictures.max}
                />
                <InputFormItem
                  name={fields.orderList.name}
                  label={fields.orderList.label}
                  required={fields.orderList.required}
                />
                <InputFormItem
                  name={fields.apiKeyRestaurant.name}
                  label={fields.apiKeyRestaurant.label}
                  required={fields.apiKeyRestaurant.required}
                />
                <InputFormItem
                  name={fields.apiKeysFood.name}
                  label={fields.apiKeysFood.label}
                  required={fields.apiKeysFood.required}
                />
                <InputFormItem
                  name={fields.foodName.name}
                  label={fields.foodName.label}
                  required={fields.foodName.required}
                />
                <InputFormItem
                  name={fields.foodDesc.name}
                  label={fields.foodDesc.label}
                  required={fields.foodDesc.required}
                />
                <InputNumberFormItem
                  name={fields.foodCount.name}
                  label={fields.foodCount.label}
                  required={
                    fields.foodCount.required
                  }
                />
                <InputFormItem
                  name={fields.baseCost.name}
                  label={fields.baseCost.label}
                  required={fields.baseCost.required}
                />

                <div className="form-buttons">
                  <button
                    className="btn btn-primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    <ButtonIcon
                      loading={saveLoading}
                      iconClass="far fa-save"
                    />{' '}
                    {i18n('common.save')}
                  </button>

                  <button
                    className="btn btn-light"
                    type="button"
                    disabled={saveLoading}
                    onClick={form.handleReset}
                  >
                    <i className="fas fa-undo"></i>{' '}
                    {i18n('common.reset')}
                  </button>

                  {this.props.onCancel ? (
                    <button
                      className="btn btn-light"
                      type="button"
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                    >
                      <i className="fas fa-times"></i>{' '}
                      {i18n('common.cancel')}
                    </button>
                  ) : null}
                </div>
              </form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default CheckoutForm;
