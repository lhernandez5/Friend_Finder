var friendsArr=[];
$.get("/api/friends", function (data) {
    // console.log(data);
    if (data) {
        
        friendsArr.push(res.json(data));
        console.log(friendsArr);
    }
});
