var express = require("express"),
	app = express(),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler'),
	methodOverride = require('method-override'),
	hostname = 'localhost',
	port = 3000,
	publicDir =__dirname + '/../www',
	path = require('path'),
	routes = require('./routes');


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

app.post('/login',function (req, res){
	console.log(req.body);
	console.log(res.body);
	res.json({status:true});
});

console.log("Serving from: %s\nListening at http://%s:%s", publicDir.replace(/\\/g,'/'), hostname, port);
app.listen(port, hostname);