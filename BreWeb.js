var fs = require('fs');
var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
res.sendFile(__dirname + '/static/indexYoga.html');
});


app.listen(process.env.PORT ||2999);
console.log("Running...")
