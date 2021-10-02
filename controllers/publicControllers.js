const Book = require("../models/book");
const User = require("../models/user");
var jwt = require("jsonwebtoken");

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
exports.getRefetchUser = (req, res) => {
  const id = req.query.id;
  User.findById({ _id: id })
    .then((ele) => {
      console.log(ele);
      res.send(ele);
    })
    .catch((err) => res.send({ error: true }));
};

//POST
exports.postSignUp = (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
    fname,
    lname,
    email,
    password,
    cart: { items: [], totalQuantity: 0, totalPrice: 0 },
  });
  user
    .save()
    .then(() => res.send("created"))
    .catch((err) => console.log(err));
};
exports.postLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email, password })
    .then((user) => {
      if (user) {
        var token = jwt.sign(user.email, process.env.JWT_KEY);
        res.send({ user, token });
      } else res.send({ error: "none" });
    })
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

exports.postAddToCart = (req, res) => {
  const cart = req.body.cart;
  const id = req.body.id;

  User.findByIdAndUpdate(
    id,
    { $set: { cart: cart } },
    { new: true },
    (err, user) => {
      if (!err) res.send(user);
      else console.log(err);
    }
  );
};
exports.postRemoveFromCart = (req, res) => {};
