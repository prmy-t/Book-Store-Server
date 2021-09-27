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
exports.getBooksByCategory = (req, res) => {
  let category = req.query.category;
  // let arr = query.split("-").map((ele) => {
  //   let temp = ele.toLowerCase();

  //   return temp.charAt(0).toUpperCase() + temp.slice(1);
  // });
  // let category = arr.join(" ");
  Book.find({ category })
    .then((books) => {
      if (books.length > 0) res.send(books);
      else res.send({ error: "Books not found !" });
    })
    .catch(() => res.send({ error: "Books not found !" }));
};
exports.getBooksByAuthor = (req, res) => {
  let author = req.query.author;

  Book.find({ author })
    .then((books) => {
      if (books.length > 0) res.send(books);
      else res.send({ error: "Books not found !" });
    })
    .catch(() => res.send({ error: "Books not found !" }));
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
