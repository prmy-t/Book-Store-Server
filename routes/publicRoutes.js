const express = require("express");
const router = express.Router();
const controllers = require("../controllers/publicControllers");
router.get("/get-all-books", controllers.getAllBook);
router.post("/add-book", controllers.postAddBook);

module.exports = router;
