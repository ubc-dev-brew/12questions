/*****************************************/
/* CONSTANTS														 */
/*****************************************/

var DEFAULT_PORT = 3002;

/*****************************************/
/* INITIALIZATION												 */
/*****************************************/

var express = require('express');

var app = express();

var server = http.createServer(app)
.listen(process.env.PORT || process.argv[2] || DEFAULT_PORT, function() {
	console.log('TLDRSS v' + tldrss.version + ' running on port: %s', server.address().port);
});

/*****************************************/
/* ROUTING															 */
/*****************************************/

app.get('/', function(req, res) {
	//res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/questions/:question', function(req, res) {
	
});

app.get('/resources/:resource'), function(req, res) {
	
});