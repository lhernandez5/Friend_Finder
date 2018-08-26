var friends = require("../data/friends.js");

module.exports = (function() {
  "use strict";

  var routes = require("express").Router();

  routes.get("/api/friends", function(req, res) {
    //displays a JSON of all possible friends.
    return res.json(friends);
  });

  routes.post("/api/friends", function(req, res) {
    //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    var newFriend = req.body;
    friends.push(newFriend);

    var sumDiff = [];
    var matchName;
    var matchPhoto;
    var match;

    function sumArray(a, b) {
      var arrayOfsums = [];
      var sumA = 0;
      for (var i = 0; i < Math.max(a.length, b.length); i++) {
        arrayOfsums.push(Math.abs((a[i] || 0) - (b[i] || 0)));
      }
      arrayOfsums.forEach(element => {
        sumA += element;
      });
      return sumA;
    }

    function getNewUserData(friend) {
      var score = friend.scores;
      var newArr = [];

      for (var i = 0; i < score.length; i++) {
        var number = parseInt(score[i]);
        newArr.push(number);
      }
      return newArr;
    }
    
    if (friends.length === 1) {
    } else if (friends.length > 1) {
      var friendsMinusOne = [];
      var sumArr = 0;
      var arrayOfScores = [];

      for (var i = 0; i < friends.length - 1; i++) {
        friendsMinusOne.push(friends[i].scores);
      }
      var newArr = getNewUserData(newFriend);
      for (var k = 0; k < friendsMinusOne.length; k++) {
        var intScores = [];
        for (var l = 0; l < friendsMinusOne[k].length; l++) {
          var need = [];
          need = friendsMinusOne[k];
          intScores.push(parseInt(need[l]));
        }
        arrayOfScores.push(intScores);
      }

      for (var i = 0; i < arrayOfScores.length; i++) {
        sumArr = sumArray(newArr, arrayOfScores[i]);
        sumDiff.push(sumArr);
      }
      console.log("this is the array of the differences: " + sumDiff);

      var min = Math.min.apply(Math, sumDiff);
      var minIndex = sumDiff.indexOf(min);
      matchName = friends[minIndex].name;
      matchPhoto = friends[minIndex].photo;
    }
    match = {
      matchName: matchName,
      matchPhoto: matchPhoto
    };
    if (match) {
      res.json(match);
    }
  });
  return routes;
})();
