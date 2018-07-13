module.exports = (function() {
  "use strict";
  var routes = require("express").Router();
  var path = require('path');

  routes.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "public","survey.html"));
  });
  routes.get("/", function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, "..", "public","home.html")));
  });
  return routes;
})();
