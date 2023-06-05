const express = require("express");
const app = express();
require("dotenv").config();
var bodyParser = require("body-parser");
const db = require("./src/config/dbConnection");
const routess = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");
var cors = require("cors");
const port = 8000;
db.dbConnection();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

app.use("/auth", routess);
app.use("/post", postRoutes);
app.listen(port, () => {
  console.log("server runing");
});
