import React from "react";
import { NavLink, Link } from "react-router-dom";
import potter from "../assets/potter.jpg";
import dictionary from "../assets/dictionary.jpg";
import illiad from "../assets/illiad.webp";
import captain from "../assets/captain.jpg";

const state = {
  products: [
    {
      id: 446310786,
      name: "To Kill A MockingBird",
      price: 37.74,
      productImage:
        "http://images.amazon.com/images/P/0446310786.01.LZZZZZZZ.jpg",
    },
    {
      id: 671864769,
      name: "Relics",
      price: 41.68,
      productImage:
        "http://images.amazon.com/images/P/0671864769.01.LZZZZZZZ.jpg",
    },
    {
      id: 345429176,
      name: "Ufos JFK and Elvis",
      price: 108.38,
      productImage:
        "http://images.amazon.com/images/P/0345429176.01.LZZZZZZZ.jpg",
    },
    {
      id: 440414717,
      name: "My Life in Dog Years",
      price: 10.38,
      productImage:
        "http://images.amazon.com/images/P/0440414717.01.LZZZZZZZ.jpg",
    },
  ],
};
const listItems = state.products.map((product, index) => {
  return (
    <li key={index}>
      <h3>
        {product.name}
        <br />
        <Link to={"http://localhost:5173/products/productDetails/" + product.id}>
          <img src={product.productImage} />
        </Link>
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
