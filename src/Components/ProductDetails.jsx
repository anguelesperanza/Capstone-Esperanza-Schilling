import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { isbn } = useParams();

  // const thisBook = props.product.

  //   Will need to add more tags once able to pull data
  return (
    <div className="productCard">
      <h1>Product Details Page</h1>
      <img src="https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg"></img>
      <div className="specItem">
        <h1>Book Name</h1>
        <h2>{isbn}</h2>
      </div>
      <button
        onClick={() => {
          // May need to change items to a unique value like ISBN
          let cartData = '{"items":[{"Desc":"Item1"},{"Desc":"Item2"}]}';

          localStorage.setItem("cartInfo", cartData);
        }}
      >
        Add to Card!
      </button>
      <button
        onClick={() => {
          console.log(JSON.parse(localStorage.getItem("cartInfo")));
        }}
      >
        Load Local Storage
      </button>
    </div>
  );
}
export default ProductDetails;

// <div class="card">
//     <img src="https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SL1500_.jpg" alt="Avatar" style="width:100%">
//     <div class="container">
//         <h4><b>John Doe</b></h4>
//         <p>Architect & Engineer</p>
//     </div>
// </div>
