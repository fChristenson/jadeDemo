var http = require('http');
var express = require('express');

var app = express();

app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');

app.get('/', function (req, res) {
    res.render('index.jade');
});

var server = http.createServer(app);
server.listen(3000, function () {
    console.log('Listening on port 3000');
});