import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import ListDisplay from "./components/listDisplay";
import ItemAdder from "./components/itemAdder";
import Navigation from "./components/navigation";

class App extends Component {
  state = {
    cartList: []
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/list" component={ListDisplay} />
            <Route path="/item/add" component={ItemAdder} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
