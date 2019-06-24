var http = require('http');
var fs = require('fs');
var request = require('request');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/get', function (req, res) {
    res.json({
        status: "Your GET request was successful!\nData received:\n" +
            JSON.stringify(req.query || {})
    });
    res.end();
});

app.post('/post', function (req, res) {
    res.json({
        status: "Your POST request was successful!\nData received:\n" +
            JSON.stringify(req.body || {})
    });
    res.end();
});

app.get('/', function (req, res) {
    //    res.redirect("https://github.com/Team-Sudo-Code/Video-Noise-Reduction-API");
    res.sendFile(__dirname + "/index.html");
});

app.use(favicon(__dirname + '/favicon.ico'));

app.listen(process.env.PORT || 8000, () =>
    console.log(`Example app listening on port ${process.env.PORT || 8000}!`),
);