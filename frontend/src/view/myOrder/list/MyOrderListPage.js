import React, { Component } from 'react';
import MyOrderListFilter from 'view/myOrder/list/MyOrderListFilter';
import MyOrderListTable from 'view/myOrder/list/MyOrderListTable';
import MyOrderListToolbar from 'view/myOrder/list/MyOrderListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class MyOrderListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.myOrder.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.myOrder.list.title')}
          </PageTitle>

          <MyOrderListToolbar />
          <MyOrderListFilter />
          <MyOrderListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default MyOrderListPage;
