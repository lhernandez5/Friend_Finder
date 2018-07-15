var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(__dirname + "/public"));
var htmlRoutes=require("./app/routing/htmlRoutes");
var apiRoutes=require("./app/routing/apiRoutes");

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });