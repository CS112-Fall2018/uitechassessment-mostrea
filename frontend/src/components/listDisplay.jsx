import React, { Component } from "react";
import axios from "axios";

class ListDisplay extends Component {
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

  render() {
    return (
      <div>
        <pre id="json">{JSON.stringify(this.state.cartList, null, 2)}</pre>
      </div>
    );
  }
}

export default ListDisplay;
