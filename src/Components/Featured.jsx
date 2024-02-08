import React from "react";
import { NavLink } from "react-router-dom";
import potter from "../assets/potter.jpg";
import dictionary from "../assets/dictionary.jpg";
import illiad from "../assets/illiad.webp";
import captain from "../assets/captain.jpg";

const state = {
  products: [
    {
      id: 1,
      name: "Chamber Of Secrets",
      price: 14.99,
      productImage: potter,
    },
    {
      id: 2,
      name: "The Illiad",
      price: 35.95,
      productImage: illiad,
    },
    {
      id: 3,
      name: "Dictionary",
      price: 10.99,
      productImage: dictionary,
    },
    {
      id: 4,
      name: "Captain Underpants",
      price: 1.99,
      productImage: captain,
    },
  ],
};
const listItems = state.products.map((product, index) => {
  return (
    <li key={index}>
      <h3>
        {product.name}
        <br />
        <img src={product.productImage} />
        <br/>
        {product.price}
      </h3>
      {/* <h2 style={{margin:"0"}}>{product.price}</h2> */}
    </li>
  );
});
function Featured() {
  return (
    <div>
      <h1>Featured Products</h1>
      <hr />
      <ul>{listItems}</ul>
    </div>
  );
}
export default Featured;
