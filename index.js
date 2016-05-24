var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res){
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function (){
	console.log("Server Starting @ port 3000");
});