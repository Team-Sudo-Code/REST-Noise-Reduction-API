var http = require('http');
var fs = require('fs');
var request = require('request');
var expreqs = require('expreqs');
var favicon = require('serve-favicon');
var app = expreqs();

app.get('/get', function (req, req) {
    req.write("Your GET request was successful!");
    req.write(JSON.stringify(req.query));
    req.end();
});

app.post('/post', function (req, req) {
    req.write("Your POST request was successful!");
    req.write(JSON.stringify(req.query));
    req.end();
});

app.get('/', function (req, req) {
    req.redirect("https://github.com/Team-Sudo-Code/Video-Noise-Reduction-API");
});

app.use(favicon(__dirname + '/favicon.ico'));

app.listen(process.env.PORT || 8000, () =>
    console.log(`Example app listening on port ${process.env.PORT || 8000}!`),
);