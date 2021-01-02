# MemeVerse 1.1
This is a web app intended to build on #MERN stack where user can watch,giving reaction and comment their opinions on the memes shared 
on the platform. In this project for the backend I used Node and Express js environment to build our API.For the database I used MongoDb and for
the UI I have used React js and Matarialize .I have also used JWT for authantication purspose.
In the Server folder there are few folders, I am giving a short discription below.

Middleware->Here I have wrriten the code for handling the incoming requests for the route handlers
Models-> In this section I have writtens the schemas for the Users and posts
routes->Here in this section I have kept the code for the sign/signup routes and post routes ,I also implemented jasonwebtoken and middleware to verify the token here too.

For the frontend part I have used the UI section.Since I have used react so, I have developed the Navbar component in the component section .given the profile,signin,signup and home component also being developed in the screen section .
To chek if the API works correctly or not,It has been check by postmen hence It can be said that,till now the developed API is working correctly.
