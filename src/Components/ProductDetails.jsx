import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
//import Rating from "@mui/material/Rating";
// or
import Rating from "@mui/material/Rating";

const url = new URL("http://localhost:4000/productDetails/");

function ProductDetails() {
  //id should be ISBN
  const { ISBN } = useParams();
  console.log(ISBN);
  const books_url = url + ISBN;
  const [book, setBook] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(books_url);
        const json = await response.json();
        setBook(json);
      } catch (e) {
        console.log(e);
        console.log("Couldnt find record");
      }
    }
    fetchData();
  }, []);
  const ratingBar = (book.popularity)/2
  return (
    <div>
      <h2>Find More information on your book . . .</h2>
      <h2>{book.BookTitle}</h2>
      <img
        src={
          book.ImageURLL == null
            ? "https://t3.ftcdn.net/jpg/00/06/45/56/360_F_6455661_Ptvg5iAO0DpUlt0ItlO8YewZpvU3IxwX.jpg"
            : book.ImageURLL
        }
      />
      <p>Author: {book.BookAuthor}</p>
      <p>{book.YearOfPublication}</p>
      <Rating
        name="half-rating-read"
        value={ratingBar}
        precision={0.5}
        readOnly
      />
      <p>Price: {book.price}</p>
      <p>Category: {book.category}</p>

      <button
        onClick={() => {
          let cartData = JSON.stringify(book);
          localStorage.setItem(book.ISBN, cartData);
        }}
      >
        Buy Now!
      </button>
    </div>
  );
}
export default ProductDetails;
