const express = require("express");
const routes = express.Router();
const {
  addBuying,
  updateBuying,
  getBuying,
} = require("../controller/postController");
routes.post("/addBuying", addBuying);
routes.post("/updateBuying", updateBuying);
routes.get("/getBuying", getBuying);

module.exports = routes;
