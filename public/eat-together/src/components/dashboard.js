import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class DashBoard extends Component {
  state = {
    restaurantID: null,
    searchValue: null,
    resList: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `https://eatstreet.com/publicapi/v1/restaurant/search?method=both&search=${this.state.searchValue}&street-address=Boston,+MA`,
        {
          headers: {
            "X-Access-Token": "09eacd7f66391c84"
          }
        }
      )
      .then(res => {
        // add 10 restaurants to the resList
        this.setState({
          ...this.state,
          resList: res.data.restaurants.slice(10)
        });
      });
  };

  render() {
    const { resList } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="searchValue" onChange={this.handleChange} />
        </form>
        {resList
          ? resList.map(restaurant => {
              return (
                <div key={restaurant.apiKey}>
                  <img src={restaurant.logoUrl} alt={restaurant.phone} />
                  <Link to={"/r/" + restaurant.apiKey}>{restaurant.name}</Link>
                  <br />
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default DashBoard;
