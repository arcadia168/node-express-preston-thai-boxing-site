const express = require("express");
const bodyParser = require("body-parser");
const sassMiddleware = require("node-sass-middleware");
const path = require("path");
const app = express();
const port = process.env.PORT || 8085; //to configure the server to run on Azure.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  sassMiddleware({
    /* Options */
    src: __dirname,
    dest: path.join(__dirname, "public/css"),
    debug: true,
    outputStyle: "compressed",
    prefix: "/css" // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
  })
);
// Note: you must place sass-middleware *before* `express.static` or else it will
// not work.
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port);
exports = module.exports = app;
