/**
 * Created by aviad on 5/25/2016.
 */
var path = require("path"),
	publicDir =__dirname + '/../www',
	loginHandlers = require('././routes.controllers.login.js');


var routes = function(app){

	app.get("/", function (req, res) {
		res.sendFile(path.join(publicDir, "/index.html"));
	});
	app.post('/login',loginHandlers.login);
};

module.exports = routes;