import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/list">Cart List</NavLink>
      <NavLink to="/item/add">Add Item</NavLink>
    </div>
  );
};

export default Navigation;
