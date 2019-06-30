var http = require('http');
var fs = require('fs');
var request = require('request');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use('/client', express.static(__dirname + '/client'));
app.use('/libs', express.static(__dirname + '/libs'));

app.get('/demo/get', function (req, res) {
    res.json({
        message: "Your GET request was successful!\nData received:\n" +
            JSON.stringify(req.query || {})
    });
    res.end();
});

app.post('/demo/post', function (req, res) {
    res.json({
        message: "Your POST request was successful!\nData received:\n" +
            JSON.stringify((req.body || {"params":undefined}).params)
    });
    res.end();
});

app.get('/', function (req, res) {
    //    res.redirect("https://github.com/Team-Sudo-Code/Video-Noise-Reduction-API");
    res.sendFile(__dirname + "/index.html");
});

app.use(favicon(__dirname + '/favicon.ico'));

app.listen(process.env.PORT || 8000, () =>
    console.log(`Server listening on port ${process.env.PORT || 8000}!`),
);