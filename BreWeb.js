var fs = require('fs');
var express = require ('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
res.sendFile(__dirname + '/static/indexYoga.html');
});


app.listen(process.env.PORT);
console.log("Running...")
