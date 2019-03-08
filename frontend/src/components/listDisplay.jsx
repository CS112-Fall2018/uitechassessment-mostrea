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
          <tbody>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
            {this.state.cartList.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <pre id="json">{JSON.stringify(this.state.cartList, null, 2)}</pre> */}
      </div>
    );
  }
}

export default ListDisplay;
