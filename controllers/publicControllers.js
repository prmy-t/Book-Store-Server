const Book = require("../models/book");

exports.getAllBook = (req, res) => {
  Book.find()
    .then((books) => res.send(books))
    .catch((err) => console.log(err));
};
exports.getCategories = (req, res) => {
  Book.find()
    .select("category author")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};
exports.getSingleBook = (req, res) => {
  const id = req.query.bookId;

  Book.findById({ _id: id })
    .then((book) => {
      if (book.length === 0) res.send({ error: true });
      else res.send(book);
    })
    .catch((err) => res.send({ error: true }));
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
