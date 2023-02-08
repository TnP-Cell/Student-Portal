const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const connect = require("./backend/db");
const app = express();
connect();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.use("/", require("./backend/routes/pages"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port: ${process.env.PORT}`);
});
