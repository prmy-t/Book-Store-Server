const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
