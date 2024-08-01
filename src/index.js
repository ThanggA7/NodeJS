const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;
const path = require("path");
const route = require("./routers");
const handlebars = require("express-handlebars");
const database = require("./config/db");

// Use static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Template engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

//



// Routes init
route(app);


// Connect to DB
database.connect();


app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});