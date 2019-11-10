import React, { Component } from "react";
import { connect } from "react-redux";
import { addRestaurantID } from "../store/actions/restaurantActions";
import axios from "axios";

import Item from "./item";

class RestaurantDashboard extends Component {
  state = {
    categoryList: null,
    cart: null,
    totalPrice: null
  };

  componentDidMount() {
    const id = this.props.match.params.resId;
    axios
      .get(
        `https://eatstreet.com/publicapi/v1/restaurant/${id}/menu?includeCustomizations=false`,
        {
          headers: {
            "X-Access-Token": "09eacd7f66391c84"
          }
        }
      )
      .then(res => {
        // add 2 menu categories to categoryList
        this.setState({
          ...this.state,
          categoryList: res.data.slice(0, 2)
        });
      });
    this.props.addRestaurantID(id);
  }

  addToCart = item => {
    //   const {cart, totalPrice} = this.state;
    this.setState({
      cart: this.state.cart + 1,
      totalPrice: this.state.totalPrice + item.basePrice
    });
  };

  render() {
    const { categoryList } = this.state;
    let items = categoryList ? (
      categoryList.map(category => {
        return (
          <div key={category.apiKey}>
            <h6>{category.name}</h6>
            <ul>
              {category.items.map(item => {
                return (
                  <li key={item.apiKey}>
                    <Item item={item} addToCart={this.addToCart} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })
    ) : (
      <p>Loading...</p>
    );
    return <>{items}</>;
  }
}

// const mapStateToProps = (state) =>

const mapDispatchToProps = dispatch => {
  return {
    addRestaurantID: resID => {
      console.log(resID);
      dispatch(addRestaurantID(resID));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RestaurantDashboard);
