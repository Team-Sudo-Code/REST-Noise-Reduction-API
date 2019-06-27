var express = require('express');
var pybackend = require("./callpython.js")
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/demo/get', function (req, res) {
    res.json({
        message: "Your GET request was successful!\nData received:\n" +
            JSON.stringify(req.query || {})
    });
    res.end();
});
app.get('/denoise', function (req, res) {
    res.json({
        status: "GUI for uploading audio to be denoised is not yet ready\n"
    });
    res.end();
})
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