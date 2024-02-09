import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import potter from "../assets/potter.jpg";
import dictionary from "../assets/dictionary.jpg";
import illiad from "../assets/illiad.webp";
import captain from "../assets/captain.jpg";

// Testing code
import ProductDetails from "./ProductDetails";
// import { useNavigate } from "react-router-dom";

const state = {
  products: [
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 8,
      price: 14.99,
      name: "Socks",
      description: "for keeping feet warm",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 7,
      name: "Gloves",
      description: "to protect hands",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 6,
      name: "Shoes",
      description: "all purpose footwear",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 5,
      name: "Hat",
      description: "head wear",
      productImage: dictionary,
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
      price: 14.99,
      id: 9,
      name: "Raincoat",
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 8,
      name: "Socks",
      description: "for keeping feet warm",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 7,
      name: "Gloves",
      description: "to protect hands",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 6,
      name: "Shoes",
      description: "all purpose footwear",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 5,
      name: "Hat",
      description: "head wear",
      productImage: dictionary,
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

function Products() {
  //Search Hook
  const [search, setSearch] = useState("");
  console.log(search);
  const [pagelimit, setpageLimit] = useState(4);

  //Filter Retrieved by Search Bar
  const listItems = state.products
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search);
    })
    .map((item, index) => {
      return (
        <li key={index}>
          <h3>
            <Link to={"/products/" + item.id}>
              {item.name}
              <br />
              <img
                // onClick={() => {
                //   console.log(item.name + " has been clicked");
                //   <Link to="/products/${item.id}">
                //     {/* <ProductDetails /> */}
                //   </Link>;
                // }}
                src={
                  item.productImage == null
                    ? "https://t3.ftcdn.net/jpg/00/06/45/56/360_F_6455661_Ptvg5iAO0DpUlt0ItlO8YewZpvU3IxwX.jpg"
                    : item.productImage
                }
              />
            </Link>

            <br />
            {item.price}
          </h3>
        </li>
      );
    });
  function addpages() {
    setpageLimit(pagelimit + 2);
  }

  console.log(typeof listItems);
  return (
    <div>
      <h4>Books Page</h4>
      <input
        onChange={(e) => setSearch(e.target.value)}
        id="a"
        placeholder="Search . . ."
      />
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
