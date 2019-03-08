import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart Home Page</h2>
        <button>
          <Link to="/list">View Cart</Link>
        </button>
        <button>
          <Link to="/item/add">Add Item</Link>
        </button>
      </div>
    );
  }
}

export default HomePage;
