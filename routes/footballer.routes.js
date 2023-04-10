const path = require("path");
const express = require("express");
const router = express.Router();

const {
  getFootballers,
  addFootballer,
  updateFootballer,
  removeFootballer,
} = require("../controllers/footballer.controller");


router
  .get("/:id?", getFootballers)
  .post("/", addFootballer)
  .put("/:id", updateFootballer)
  .delete("/:id", removeFootballer);

module.exports = router;