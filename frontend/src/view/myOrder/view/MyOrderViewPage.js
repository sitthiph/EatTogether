import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import MyOrderView from 'view/myOrder/view/MyOrderView';
import { i18n } from 'i18n';
import actions from 'modules/myOrder/view/myOrderViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/myOrder/view/myOrderViewSelectors';
import MyOrderViewToolbar from 'view/myOrder/view/MyOrderViewToolbar';

class MyOrderPage extends Component {
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
            [i18n('entities.myOrder.menu'), '/my-order'],
            [i18n('entities.myOrder.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.myOrder.view.title')}
          </PageTitle>

          <MyOrderViewToolbar match={this.props.match} />

          <MyOrderView
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

export default connect(select)(MyOrderPage);
