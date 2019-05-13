# Redux Feedback Loop
This application displays feedback that will be collected over 4 views, and when all steps are complete, app will save the feedback in the database. In a separate part of the page, displays the current feedback values and a submit button. 

##Built With
node js React npm JSX React-Redux materialUI


##Getting Started
node js


##Prerequisites
Node.js -- (https://nodejs.org/en/)
Code editor
Installing
Download project with git clone
npm install
killall node if necessary
npm run server on one terminal
npm run client on one terminal

##Setup
All data is stored in an array on the server.

Running the server code requires nodemon. If you don't already have nodemon, install it globally with npm install nodemon --global.

npm install npm run server

Now that the server is running, open a new terminal tab with cmd + t and start the react client app.

npm run client

Between the server and client, you'll need two terminal tabs! Because we're using nodemon, both our client side and server side will automatically spin back up when changes are made!

##Instructions
when page loads enter the feeling input(1-5)
hit NEXT button to navigate to understanding page
enter field(1-5) for understanding 
and do the same with support and comments and hit NEXT button that will take you to the review page
if all the fields are provided hit submit and it navigates thank you page with the feedback provided
new feedback button takes you to the home page

##Deployed
heroku--https://fierce-badlands-99810.herokuapp.com/#/

##Authors
Heena Kouser


