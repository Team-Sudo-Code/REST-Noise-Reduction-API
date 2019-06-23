var http = require('http'),
var fs = require('fs');
var request = require('request');
var app = express();

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT || 8000);
});

app.get('/test', function (req, res) {
    res.end("Get request worked!");
})
