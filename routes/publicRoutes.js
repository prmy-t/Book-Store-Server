const express = require("express");
const router = express.Router();
const controllers = require("../controllers/publicControllers");

//GET
router.get("/", controllers.getSingleBook);
router.get("/get-categories", controllers.getCategories);
router.get("/category", controllers.getBooksByCategory);
router.get("/author", controllers.getBooksByAuthor);
router.get("/refetch-user", controllers.getRefetchUser);

router.get("/get-all-books", controllers.getAllBook);

//POST
router.post("/sign-up", controllers.postSignUp);
router.post("/login", controllers.postLogin);
router.post("/add-book", controllers.postAddBook);
router.post("/add-to-cart", controllers.postAddToCart);
router.post("/remove-from-cart", controllers.postRemoveFromCart);

module.exports = router;
