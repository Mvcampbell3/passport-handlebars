const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const session = require("express-session");
const routes = require("./routes")

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars")

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:3001`)
})