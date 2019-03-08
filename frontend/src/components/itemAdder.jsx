import React, { Component } from "react";
import axios from "axios";

class ItemAdder extends Component {
  state = {
    name: "",
    description: "",
    price: "",
    amount: ""
  };

  handleNewName = event => {
    this.setState({ name: event.target.value });
  };

  handleNewDesc = event => {
    this.setState({ description: event.target.value });
  };

  handleNewPrice = event => {
    this.setState({ price: parseInt(event.target.value) });
  };

  handleNewAmount = event => {
    this.setState({ amount: parseInt(event.target.value) });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios.post("/item/add", this.state).then(res => {
      console.log(res);
      console.log(res.data);
    });
    console.log(JSON.stringify(this.state));
  };

  render() {
    return (
      <div>
        <h3>Add a new item to the cart</h3>

        <form onSubmit={this.handleSubmit}>
          <label>
            Item Name:
            <input type="text" name="name" onChange={this.handleNewName} />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              onChange={this.handleNewDesc}
            />
          </label>
          <label>
            Price:
            <input type="text" name="price" onChange={this.handleNewPrice} />
          </label>
          <label>
            Amount:
            <input type="text" name="amount" onChange={this.handleNewAmount} />
          </label>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default ItemAdder;
