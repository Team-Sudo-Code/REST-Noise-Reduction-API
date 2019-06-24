var http = require('http');
var fs = require('fs');
var request = require('request');
var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.get('/get', function (req, res) {
    res.write("Your GET request was successful!\nData received:\n"+JSON.stringify(req.query||{}));
    res.end();
});

app.post('/post', function (req, res) {
    res.write("Your POST request was successful!\nData received:\n"+JSON.stringify(req.query||{}));
    res.end();
});

app.get('/', function (req, res) {
    res.redirect("https://github.com/Team-Sudo-Code/Video-Noise-Reduction-API");
});

app.use(favicon(__dirname + '/favicon.ico'));

app.listen(process.env.PORT || 8000, () =>
    console.log(`Example app listening on port ${process.env.PORT || 8000}!`),
);