// // server.js

// // BASE SETUP
// // =============================================================================
var api = {
    
    AddCollection:function(nametoadd)
    {
        var nameValue = document.getElementById("nametoadd").value;
        console.log(nameValue);
    },
    
    FindCollection:function(nametofind)
    {
       var nameValue = document.getElementById("nametofind").value;
       console.log("FindCollection");
    },
    
    DeleteCollection:function(nametodelete)
    {
        var nameValue = document.getElementById("nametodelete").value;
        console.log("DeleteCollection");
    }
    
    
};
// // call the packages we need

// var express = require('express')          // call express
// var app = express();                      // define our app using express
// var bodyParser = require('body-parser');

// // configure app to use bodyParser()
// // this will let us get the data from a POST

// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

// var port = process.env.PORT || 8080;      // set our port

// // ROUTES FOR OUR API
// // =============================================================================
// var router = express.Router();            // get an instance of the express Router