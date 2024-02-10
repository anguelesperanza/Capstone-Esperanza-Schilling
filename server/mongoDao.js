const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "BooksDB";
const collection_name = "books";
let collection;

async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  collection = db.collection(collection_name);
}
startup();


//Retrieve Book info by ISBN

module.exports.findBookByISBN = function (ISBN, callback) {
  let dataPromise = collection
    .findOne({ISBN : ISBN})
    
    console.log(ISBN);
    console.log("hello");
  dataPromise.then((book) => callback(book));
  console.log(dataPromise);
  
};

//retrieve all books
module.exports.findAllBook = function (callback) {
  let dataPromise = collection
    .find({})
    .toArray();
  dataPromise.then((book) => callback(book));
};
  
