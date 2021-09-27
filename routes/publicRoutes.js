const express = require("express");
const router = express.Router();
const controllers = require("../controllers/publicControllers");

//GET
router.get("/", controllers.getSingleBook);
router.get("/get-categories", controllers.getCategories);
router.get("/category", controllers.getBooksByCategory);
router.get("/author", controllers.getBooksByAuthor);

router.get("/get-all-books", controllers.getAllBook);

//POST
router.post("/add-book", controllers.postAddBook);

module.exports = router;
