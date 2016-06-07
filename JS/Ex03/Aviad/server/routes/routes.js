/**
 * Created by aviad on 5/25/2016.
 */
'use strict';
let AuthServices = require('./../controllers/auth/routes.controllers.auth'),
	CalcServices = require('./../controllers/calc/routes.controllers.calc'),
	path = require("path");
const publicDir =__dirname + '/../www';

const routes = function(app){

	app.get("/", function (req, res) {
		res.sendFile(path.join(publicDir, "/index.html"));
	});
	app.post('/login',AuthServices.login);
	app.post('/login/:token',AuthServices.tokenLogin);
	app.post('/calc/value/:val',CalcServices.storeCalcData);
	app.get('/calc/value',CalcServices.retrieveCalcData);
};

module.exports = routes;