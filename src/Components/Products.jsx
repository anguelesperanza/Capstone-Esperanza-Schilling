import React from "react";
import { NavLink } from "react-router-dom";

const state = {
  products: [
    {
      name: "Raincoat",
      description: "foul weather outerwear"},
    {
      name: "Socks",
      description: "for keeping feet warm"},
    {
      name: "Gloves",
      description: "to protect hands"},
    {
      name: "Shoes",
      description: "all purpose footwear"},
    { 
      name: "Hat", 
      description: "head wear"},
  ],
};

const listItems = state.products.map((item, index) => {
  return (
    <li id="bookcontent" key={index}>
      {item.name}
      
    </li>
  );
});

const Products = (list) => {
  return (
    <div>
      <h4>Books Page</h4>
      <div>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default Products;
