import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Intro from "./components/intro";
import Dashboard from "./components/dashboard";
import RestaurantDashboard from "./components/restaurantDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Intro}></Route>
          <Route path="/r/:resId" component={RestaurantDashboard}></Route>
          <Route path="/:code" component={Dashboard}></Route>
          {/* <Route path="/checkout" component={Checkout}></Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
