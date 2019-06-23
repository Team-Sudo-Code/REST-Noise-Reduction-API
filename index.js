var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
    res.end("Get request worked!");
})

var server = app.listen(process.env.port || 8000, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
})