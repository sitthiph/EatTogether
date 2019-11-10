import model from 'modules/checkout/checkoutModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';

const { fields } = model;

class CheckoutView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.userName.label}
          value={fields.userName.forView(record.userName)}
        />

        <ImagesViewItem
          label={fields.pictures.label}
          value={fields.pictures.forView(record.pictures)}
        />

        <TextViewItem
          label={fields.orderList.label}
          value={fields.orderList.forView(record.orderList)}
        />

        <TextViewItem
          label={fields.apiKeyRestaurant.label}
          value={fields.apiKeyRestaurant.forView(record.apiKeyRestaurant)}
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
          label={fields.foodDesc.label}
          value={fields.foodDesc.forView(record.foodDesc)}
        />

        <TextViewItem
          label={fields.foodCount.label}
          value={fields.foodCount.forView(record.foodCount)}
        />

        <TextViewItem
          label={fields.baseCost.label}
          value={fields.baseCost.forView(record.baseCost)}
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

export default CheckoutView;
