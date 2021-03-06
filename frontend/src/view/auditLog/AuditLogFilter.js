import { Formik } from 'formik';
import actions from 'modules/auditLog/auditLogActions';
import model from 'modules/auditLog/auditLogModel';
import selectors from 'modules/auditLog/auditLogSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import TagsFormItem from 'view/shared/form/items/TagsFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import ButtonIcon from 'view/shared/ButtonIcon';
import FilterWrapper from 'view/shared/styles/FilterWrapper';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.timestampRange,
  fields.entityNames,
  fields.entityId,
  fields.action,
  fields.createdByEmail,
]);

class AuditLogFilter extends Component {
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
                      <DatePickerRangeFormItem
                        name={fields.timestampRange.name}
                        label={fields.timestampRange.label}
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.createdByEmail.name}
                        label={fields.createdByEmail.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <TagsFormItem
                        name={fields.entityNames.name}
                        label={fields.entityNames.label}
                        notFoundContent={i18n(
                          'auditLog.entityNamesHint',
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.entityId.name}
                        label={fields.entityId.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.action.name}
                        label={fields.action.label}
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
                      onClick={() => this.handleReset(form)}
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

export default withRouter(connect(select)(AuditLogFilter));
