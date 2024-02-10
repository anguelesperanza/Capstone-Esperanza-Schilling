const express = require("express");
const app = express();
const PORT = 4000;
const mongoDao = require("./mongoDao");
const cors = require("cors");
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});

//Get requests for Data
app.get("/productDetails/:ISBN", (req, res) => {
  mongoDao.findBookByISBN(parseInt(req.params.ISBN), (book) => {
    if (!book) {
      console.log("Heres where your book object WOULDNT BE");
      //console.log(book);
      //console.log(ISBN);
      console.log(req.params.ISBN);
      res.status(404).end();
    } else {
      res.send(book);
      console.log("Heres where your book object WOULD BE");
      console.log(book);
    }
  });
});

// app.get("/books", (req, res) => {
//   mongoDao.findAllBook(function (data) {
//     res.send(data);
//   });
// });
app.get("/products", (req, res) => {
  // let sw = dao.findallcharacters(req.params.id);
  // was trying result.book, needed just result
  mongoDao.findAllBook((result) => {
    if (result !== undefined) {
      res.send(result);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
      console.log(result);
    }
  });
});
