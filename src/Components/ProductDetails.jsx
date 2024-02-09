import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { isbn } = useParams();

  // const thisBook = props.product.

  //   Will need to add more tags once able to pull data
  return (
    <div>
      <h1>Product Details Page</h1>
      <div className="specItem">
        <h1>Hello World</h1>
        <h2>{isbn}</h2>
      </div>
    </div>
  );
}
export default ProductDetails;
