import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import CheckoutView from 'view/checkout/view/CheckoutView';
import { i18n } from 'i18n';
import actions from 'modules/checkout/view/checkoutViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/checkout/view/checkoutViewSelectors';
import CheckoutViewToolbar from 'view/checkout/view/CheckoutViewToolbar';

class CheckoutPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.checkout.menu'), '/checkout'],
            [i18n('entities.checkout.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.checkout.view.title')}
          </PageTitle>

          <CheckoutViewToolbar match={this.props.match} />

          <CheckoutView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(CheckoutPage);
