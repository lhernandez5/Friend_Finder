# friendFinder
This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. This app uses Express to handle routing.
Your survey has 10 questions. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
Your server.js file makes use of the npm packages: express, body-parser and path.

htmlRoutes.js file includes two routes:

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page. 

apiRoutes.js file contains two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
