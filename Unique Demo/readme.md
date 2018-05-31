#Login Authentication

This is the login authentication using Node.js, Express , Passport and MongoDB.


#About MongoDB

This app uses MongoDB as the database. The user details are stored in MongoDB. 

First of all you should install MongoDB in your computer. The download link is given below. 

A database named 'authentication' holds the data in this app. You dont need to create the database because mongoDB automatially creates the database if it is not available.

Go to the root level of your C:\ drive and create a folder called 'data'. Inside the data folder create another folder 'db'. Now mongoDB automatically stores all the data in this folder.

After that go to "C:\Program Files\MongoDB\Server\3.6\bin". Click on 'mongod' to start mongoDB.

Download: https://www.mongodb.com/download-center#community

#About Passport

We use passport for the authentication. All the passport files are store in 'config' folder.

#How to run?
 Go to the console and start the app by command:
 		npm start

 This will start the app. After that go to the browser and type "http://localhost:3000/"