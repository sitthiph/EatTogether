import React, { Component } from 'react';
import CheckoutListFilter from 'view/checkout/list/CheckoutListFilter';
import CheckoutListTable from 'view/checkout/list/CheckoutListTable';
import CheckoutListToolbar from 'view/checkout/list/CheckoutListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class CheckoutListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.checkout.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.checkout.list.title')}
          </PageTitle>

          <CheckoutListToolbar />
          <CheckoutListFilter />
          <CheckoutListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default CheckoutListPage;
