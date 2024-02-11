import { useState, useEffect } from "react";
let dataObj = {};
let total_price = 0.0;
function Cart() {
  if (localStorage !== null) {
    let data = [];

    console.log("local storage");
    let i = 0;
    for (i = 0; i < localStorage.length; i++) {
      data.push(localStorage.getItem(localStorage.key(i)));
      let result = data[i].split(",");
      total_price = total_price + parseFloat(result[0] / 2);
      dataObj[i] = { price: result[0], BookTitle: result[1] };
      console.log(
        localStorage.key(i) +
          "=[" +
          localStorage.getItem(localStorage.key(i)) +
          "]"
      );
    }
  }

  console.log("Reaching return statement");
  // console.log("Data object " + dataObj[0].price);
  return (
    <div>
      <h1>Please confim price and checkout</h1>
      {dataObj &&
        Object.keys(dataObj).map((value, index) => {
          return (
            <div key={index}>
              {console.log("Value " + dataObj[value].BookTitle)}
              <div>
                This is the Book: {dataObj[value].BookTitle}
                <br></br>
                The value is: {dataObj[value].price}
              </div>
            </div>
          );
        })}

      <button
        onClick={() => {
          alert("Thank you for buying our books.");
          localStorage.clear();
          window.location.reload();
        }}
      >
        Purchase for total price of ${total_price}
      </button>
    </div>
    // <div>
    //   <h1>Please confim price and checkout</h1>
    //   {dataObj &&
    //     dataObj.map &&
    //     dataObj.map((value, index) => {
    //       return <div key={index}>Hello World</div>;
    //     })}
    // </div>
  );
}
export default Cart;
