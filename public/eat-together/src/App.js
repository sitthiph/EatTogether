import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Intro from "./components/intro";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Intro}></Route>
        <Route path="/:code" component={Dashboard}></Route>
        {/* <Route path="/checkout" component={Checkout}></Route> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
