# LOGIN APP

This is the login authentication system using Node.js, Express, Passport and Mongodb.

# Mongodb Installation and Configuration

This app uses Mongodb to stote the local database. All the data of the users are stored in Mongodb. A database named 'loginapp' holds all the users data in this app. Mongodb automatically creates this database if it is not available.

At first you need to install the Mongodb in your system. The download link is : https://www.mongodb.com/download-center#community

Then you need to configure it so you need to go to the root level of your C:\ drive and create a folder named 'data' and inside it create another folder named 'db'. Mongodb automatically stores all the data in this folder.

Now get your path to C:\data and enter the command line "C:\Program Files\MongoDB\Server\3.6\bin". This will start Mongodb in your system.

# About Passport

Passport is used in this app for authentication. And all the packages related to passport are installed as the dependencies in package.json file.

# How to run the app?

Go to the terminal and start the app with the command : 'nodemon app'
This will start the server. After that go to the browser and type 'http://localhost:3000/'.