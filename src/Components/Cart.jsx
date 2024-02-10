// Cannot get get to display items from local stroage

import { useState, useEffect } from "react";
// const [items, setItems] = useState([]);

// const cart = JSON.parse(localStorage.getItem("195153448"));
// 195153448 | ISBN for the first book (mythologies)
function getStorageValue(key, defaultValue) {
  const data = localStorage.getItem(key);
  const initialData = data !== null ? JSON.parse(data) : defaultValue;
  return initialData;
}

// useEffect;

function Cart() {
  // const itemISBN = cart.map(({ ISBN }) => itemISBN);

  return (
    <div>
      <h1>This is your Cart Page</h1>
      <h2>Anything you buy will show up here!</h2>
      {}

      <div className="Cart"></div>
    </div>
  );
}
export default Cart;
