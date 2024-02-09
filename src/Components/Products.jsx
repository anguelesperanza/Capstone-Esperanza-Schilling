import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import potter from "../assets/potter.jpg";
import dictionary from "../assets/dictionary.jpg";
import illiad from "../assets/illiad.webp";
import captain from "../assets/captain.jpg";

const state = {
  products: [
    {
      id: 9,
      name: "Raincoat",
      description: "foul weather outerwear",
    },
    {
      id: 8,
      name: "Socks",
      description: "for keeping feet warm",
    },
    {
      id: 7,
      name: "Gloves",
      description: "to protect hands",
    },
    {
      id: 6,
      name: "Shoes",
      description: "all purpose footwear",
    },
    {
      id: 5,
      name: "Hat",
      description: "head wear",
    },
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
    {
      id: 9,
      name: "Raincoat",
      description: "foul weather outerwear",
    },
    {
      id: 8,
      name: "Socks",
      description: "for keeping feet warm",
    },
    {
      id: 7,
      name: "Gloves",
      description: "to protect hands",
    },
    {
      id: 6,
      name: "Shoes",
      description: "all purpose footwear",
    },
    {
      id: 5,
      name: "Hat",
      description: "head wear",
    },
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
const delimitResults = () => {};
// var film = this.props.data.slice(0, 5).map((item) => {
//   return <FilmItem key={item.id} film={item} />;
// });

// return film;
const listItems = state.products.map((item, index) => {
  // const [pagelimit, setpageLimit] = useState(4);
  // const increase = 4 //pagelimit

  // if (index >= increase) {
  //   return;
  // }
  return (
    <li id="bookcontent" key={index}>
      {item.name}
    </li>
  );
});
// function addpages() {
//   setpageLimit(pagelimit + 2);
// }
function Products() {
  const [pagelimit, setpageLimit] = useState(4);
  function addpages() {
    setpageLimit(pagelimit + 2);
  }

  console.log(typeof listItems);
  return (
    <div>
      <h4>Books Page</h4>
      <div>
        <ul>{listItems.slice(0, pagelimit)}</ul>
      </div>
      <button id="showMore" onClick={addpages}>
        Show More
      </button>
    </div>
  );
}

export default Products;
//   const [pagelimit, setpageLimit] = useState(4);
