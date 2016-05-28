/**
 * Created by aviad on 5/25/2016.
 */
path = require("path"),
publicDir =__dirname + '/../public';


var routes = function(app){
	app.get("/", function (req, res) {
		res.sendFile(path.join(publicDir, "/index.html"));
	});
};

module.exports = routes;