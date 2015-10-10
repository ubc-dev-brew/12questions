/*****************************************/
/* CONSTANTS														 */
/*****************************************/

var DEFAULT_PORT = 3002;

/*****************************************/
/* INITIALIZATION												 */
/*****************************************/

var http = require('http');
var express = require('express');
var twelveQuestions = require('./package.json');
var fs = require('fs');
var app = express();
app.use('/static', express.static('assets'));

var server = http.createServer(app)
.listen(process.env.PORT || process.argv[2] || DEFAULT_PORT, function() {
	console.log('12questions v' + twelveQuestions.version + ' running on port: %s', server.address().port);
});

/*****************************************/
/* ROUTING															 */
/*****************************************/

app.get('/', function(req, res) {
	res.writeHead(200, {"Content-type": "text/html"});
	var html = fs.readFileSync(__dirname + '/views/index.html');
	res.end(html);
});

app.get('/questions/:question', function(req, res) {
	
});

app.get('/resources/:resource', function(req, res) {
	
});