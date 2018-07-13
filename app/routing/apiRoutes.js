module.exports = (function() {
  "use strict";
  var routes = require("express").Router();
  var possibleFriends=[];

  routes.get("/api/friends", function(req, res) {
    //This will be used to display a JSON of all possible friends.
    return res.json(possibleFriends);
  });
  routes.post("/api/friends", function(req, res) {
    //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    var newFriend = req.body;
    possibleFriends.push(newFriend);
    res.json(newFriend);
  });
  return routes;
})();
