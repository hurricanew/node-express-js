var express = require("express");
var http = require("http");

var app = new express();
//create a server object:
app.use(function(req, res) {
  res.write("Hello World!"); //write a response to the client
  res.end(); //end the response
});
http.createServer(app).listen(8080); //the server object listens on port 8080
