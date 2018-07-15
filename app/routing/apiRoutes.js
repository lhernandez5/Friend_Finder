var friends = require("../data/friends.js");

module.exports = (function() {
  "use strict";

  var routes = require("express").Router();

  routes.get("/api/friends", function(req, res) {
    //This will be used to display a JSON of all possible friends.
    return res.json(friends);
  });

  routes.post("/api/friends", function(req, res) {
    //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    var newFriend = req.body;
    friends.push(newFriend);
    console.log(friends);
    var sumDiff = [];
    var matchName;
    var matchPhoto;
    var match;
    function sumArray(a, b) {
      var c = [];
      var sumA = 0;
      for (var i = 0; i < Math.max(a.length, b.length); i++) {
        c.push(Math.abs((a[i] || 0) - (b[i] || 0)));
      }
      c.forEach(element => {
        sumA += element;
      });
      console.log(c);
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
      console.log("there are not matches as of now");
    } else if (friends.length > 1) {
      var friendsMinusOne = [];
      var sumArr = 0;
      var newArr_1 = [];

      for (var i = 0; i < friends.length - 1; i++) {
        friendsMinusOne.push(friends[i].scores);
      }
      var newArr = getNewUserData(newFriend);
      for (var k = 0; k < friendsMinusOne.length; k++) {
        var scoresInIndex = friendsMinusOne[k];
        var intScores = [];
        for (var l = 0; l < friendsMinusOne[k].length; l++) {
          var need = [];
          need = friendsMinusOne[k];
          intScores.push(parseInt(need[l]));
        }
        console.log(intScores + " equal " + friendsMinusOne[k]);
        newArr_1.push(intScores);
      }
      console.log("newArr " + newArr);
      console.log("this newArr_1 " + newArr_1);

      for (var i = 0; i < newArr_1.length; i++) {
        sumArr = sumArray(newArr, newArr_1[i]);
        sumDiff.push(sumArr);
      }
      console.log("this is the array of the differences: " + sumDiff);

      var min = Math.min.apply(Math, sumDiff);
      var minIndex = sumDiff.indexOf(min);
      console.log(minIndex);
      matchName = friends[minIndex].name;
      matchPhoto = friends[minIndex].photo;
      console.log(
        "You made a match with :" +
          matchName +
          "because the lowest score was" +
          min
      );
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
