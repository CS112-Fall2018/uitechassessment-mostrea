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
        <table>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
          {this.state.cartList.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </table>
        {/* <pre id="json">{JSON.stringify(this.state.cartList, null, 2)}</pre> */}
      </div>
    );
  }
}

export default ListDisplay;
