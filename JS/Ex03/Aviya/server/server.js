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

var usersDataObject = {};
var _creds = {
	'302188347' : 'aviad',
	'admin' : 'admin'
};


app.get("/", function (req, res) {
	res.sendFile(path.join(publicDir, "/index.html"));
});

var verifyCreds = function (username, password) {
	return !!username && !!password && _creds.hasOwnProperty(username) && _creds[username] == password;
};

var verifyToken = function (username, token) {
	console.log('verifying token for: ' + username + ' \\ ' + token);
	return !!usersDataObject && usersDataObject.hasOwnProperty(username) && usersDataObject[username]['token'] === token;
};
var generateToken = function () {
	var rand = function() {
		return Math.random().toString(36).substr(2); // remove `0.`
	};
	return rand() + rand(); // to make it longer
};
var injectTokenToMap = function (username, token) {
	usersDataObject[username] = {};
	usersDataObject[username]['token'] = token;
};
var getLastCalcResult = function(username){
	return usersDataObject[username]['calcResult'] || 0;
};
var setLastCalcResult = function(username,calcResult){
	usersDataObject[username]['calcResult'] = calcResult;
	console.log(username + ' set his calc result to : ' + calcResult);
};

function loginHandler(req,res) {
	var respObj = {};
	if(req.body && req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')){
		if(verifyCreds(req.body.username,req.body.password)){
			respObj['authorized'] = true;
			var token = generateToken();
			respObj['token'] = token;

			// Update in the user-token map
			injectTokenToMap(req.body.username,token);
		}else{
			respObj['authorized'] = false;
			res.status(401);
		}
	}else{
		respObj['authorized'] = false;
		res.status(401);
	}
	res.json(respObj);
}
app.post('/login',loginHandler);
function tokenVerificationHandler(req, res) {
	var respObj = {};
	if(req.body && req.body.hasOwnProperty('username') && req.body.hasOwnProperty('token')){
		if(!verifyToken(req.body.username,req.body.token)){
			respObj['authorized'] = false;
			res.status(403);
		}else{
			res.status(200);
		}
	}else{
		respObj['authorized'] = false;
		res.status(403);
	}
	res.json(respObj);
}
app.post('/confirm_tkn',tokenVerificationHandler);
function calcResultSetterHandler(req,res) {
	if(!!req.body && req.body.hasOwnProperty('username') && req.body.hasOwnProperty('token')){
		var val = req.params.val || 0;
		if(verifyToken(req.body.username, req.body.token)){
			setLastCalcResult(req.body.username,val);
		}else{

			// Not authorized
			res.status(403);
		}
	}else{

		// Err
		res.status(400);
	}
}
app.post('/calc/value/:val',calcResultSetterHandler);
function calcResultGetterHandler(req,res) {
	if(!!req.query && req.query.hasOwnProperty('username') && req.query.hasOwnProperty('token')) {
		if(verifyToken(req.query.username,req.query.token)){
			res.status(200).json({lastResult : getLastCalcResult(req.query.username)});
		}else{
			res.status(403);
		}
	}else{
		res.status(400);
	}
}
app.get('/calc/value',calcResultGetterHandler);
console.log("Serving from: %s\nListening at http://%s:%s", publicDir.replace(/\\/g,'/'), hostname, port);
app.listen(port, hostname);