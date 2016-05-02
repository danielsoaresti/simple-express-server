var bodyParser = require('body-parser');
var express = require('express');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  //res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var gfs = [ 
    { id: "1", tipo: "GF1"},
    { id: "2", tipo: "GF2"},
    { id: "3", tipo: "GF3"},
    { id: "4", tipo: "GF4"},
    { id: "5", tipo: "GF5"},
 ];
 
 app.get('/gfs', function(req, res){
    res.send(gfs); 
 });
 
 app.listen(6060);