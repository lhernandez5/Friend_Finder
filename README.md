# Friend_Finder
This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. This app uses Express to handle routing.

This survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

htmlRoutes.js file includes two routes:

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page. 

apiRoutes.js file contains two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

Friend compatibility is determined using the following as a guide:

The user's results is put into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, the difference is compared between current user's scores against those from other users, question by question. Differences are added up to calculate the totalDifference.

Example: 

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

The closest match will be the user with the least amount of difference.
A modal displays both the name and picture of the closest match.
