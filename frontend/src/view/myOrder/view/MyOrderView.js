import model from 'modules/myOrder/myOrderModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';


const { fields } = model;

class MyOrderView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.apiKeyRestaurant.label}
          value={fields.apiKeyRestaurant.forView(record.apiKeyRestaurant)}
        />

        <TextViewItem
          label={fields.restaurantName.label}
          value={fields.restaurantName.forView(record.restaurantName)}
        />

        <TextViewItem
          label={fields.apiKeysFood.label}
          value={fields.apiKeysFood.forView(record.apiKeysFood)}
        />

        <TextViewItem
          label={fields.foodName.label}
          value={fields.foodName.forView(record.foodName)}
        />

        <TextViewItem
          label={fields.quantity.label}
          value={fields.quantity.forView(record.quantity)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default MyOrderView;
