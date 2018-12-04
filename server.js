const mongoose = require('mongoose');
const db = require('./models');
//Path module to work with directory and file paths
const path = require("path");
//Imports express package and sets it up for use
const express = require("express");
//Starts the http server to except request and send resposne
const app = express();
//Imports apiRoutes 
 const apiRoutes = require("./routes/api-routes.js");
 const htmlRoutes = require("./routes/html-routes.js");
//Define port for the server to listen for request
const PORT = process.env.PORT || 3001;
//Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Routes
app.use(apiRoutes);
app.use(htmlRoutes);

mongoose.connect('mongodb://localhost/fitnessclub', { useNewUrlParser: true});
  

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
  });