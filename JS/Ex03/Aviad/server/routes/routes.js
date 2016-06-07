/**
 * Created by aviad on 5/25/2016.
 */
'use strict';
let AuthService = require('./../controllers/auth/routes.controllers.auth'),
	CalcService = require('./../controllers/calc/routes.controllers.calc'),
	QuotesService = require('../controllers/quote/routes.controllers.quote'),
	path = require("path");
const publicDir =__dirname + '/../www';

const routes = function(app){

	app.get("/", function (req, res) {
		res.sendFile(path.join(publicDir, "/index.html"));
	});
	app.post('/login',AuthService.login);
	app.post('/login/:token',AuthService.tokenLogin);
	app.post('/calc/value/:val',CalcService.storeCalcData);
	app.get('/calc/value',CalcService.retrieveCalcData);
	app.get('/quotes/random',QuotesService.retrieveRandomQuote);
};

module.exports = routes;