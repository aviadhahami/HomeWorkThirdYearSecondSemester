var express = require("express"),
	app = express(),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler'),
	methodOverride = require('method-override'),
	hostname = 'localhost',
	port = 3000,
	publicDir =__dirname + '/../www',
	path = require('path'),
	routes = require('./routes')(app);


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

console.log("Serving from: %s\nListening at http://%s:%s", publicDir.replace(/\\/g,'/'), hostname, port);
app.listen(port, hostname);