var http = require('http');
var fs = require('fs');
var request = require('request');
var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.get('/test', function (req, response) {
    response.send("Test get request endpoint");
});

app.get('/', function (req, response) {
    response.redirect("https://github.com/Team-Sudo-Code/Video-Noise-Reduction-API");
});

app.use(favicon(__dirname + '/favicon.ico'));

app.listen(process.env.PORT || 8000, () =>
    console.log(`Example app listening on port ${process.env.PORT || 8000}!`),
);