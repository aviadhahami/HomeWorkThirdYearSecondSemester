/**
 * Created by aviad on 5/25/2016.
 */
'use strict';
let AuthServices = require('./../controllers/Auth/routes.controllers.auth');
var path = require("path"),
	publicDir =__dirname + '/../www';

var routes = function(app){

	app.get("/", function (req, res) {
		res.sendFile(path.join(publicDir, "/index.html"));
	});
	app.post('/Auth',AuthServices.login);
};

module.exports = routes;