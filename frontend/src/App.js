import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    cartList: []
  };

  componentDidMount() {
    axios.get("/list").then(res => {
      const cartList = res.data;
      console.log(cartList);
      this.setState({ cartList });
    });
  }

  handleAdd = () => {};

  render() {
    return (
      <div>
        <h3>Shopping Cart</h3>
        <Router>
          <div>
            <Link to="/list">CartList</Link>
            <button>Add Item</button>
          </div>
        </Router>
        <h4>Current Cart: </h4>

        <pre id="json">{JSON.stringify(this.state.cartList, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
