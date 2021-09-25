const Book = require("../models/book");

exports.getAllBook = (req, res) => {
  Book.find()
    .then((books) => res.send(books))
    .catch((err) => console.log(err));
};

exports.postAddBook = (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const category = req.body.category;
  const price = req.body.price;

  const book = new Book({
    title,
    author,
    category,
    price,
  });
  book
    .save()
    .then(() => res.send("saved"))
    .catch((err) => console.log(err));
};
