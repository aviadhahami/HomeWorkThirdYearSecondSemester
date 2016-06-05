var express = require("express"),
	app = express(),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler'),
	methodOverride = require('method-override'),
	hostname = 'localhost',
	port = 3000,
	publicDir =__dirname + '/../www',
	path = require('path');


app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
	dumpExceptions: true,
	showStack: true
}));

app.get("/", function (req, res) {
	res.sendFile(path.join(publicDir, "/index.html"));
});
var _creds = {
	'302188347' : 'aviad',
	'admin' : 'admin'
};

var verifyCreds = function (username, password) {
	return !!username && !!password && _creds.hasOwnProperty(username) && _creds[username] == password;
};
function loginHandler(req,res) {
	var respObj = {};
	if(req.body && req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')){
		if(verifyCreds(req.body.username,req.body.password)){
			respObj['authorized'] = true;
			respObj['token'] = '';
		}else{
			respObj['authorized'] = false;
		}
	}else{
		respObj['authorized'] = false;
	}
	res.json(respObj);
}
app.post('/login',loginHandler);

console.log("Serving from: %s\nListening at http://%s:%s", publicDir.replace(/\\/g,'/'), hostname, port);
app.listen(port, hostname);