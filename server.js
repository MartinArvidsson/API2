var fs = require("fs");
var express = require("express");
var app = express();

app.use(express.static("client"));

 app.get('/', function (req, res) {
    fs.readFile("index.html", function(req, res){
        res.send(data.toString());
    });
 });
 
 
app.post('/collection', function (req, res) {
    
    console.log("hej");
   //res.send('Added');
});

// app.put('/index.html', function (req, res) {
//   res.send('Update');
// });

// app.delete('/index.html', function (req, res) {
//   res.send('Delete');
// });

app.listen(process.env.PORT || 8080, process.env.IP || "127.0.0.1", function () {
    console.log('IT WORKS!');
});