/**
 * Created by aviad on 6/7/2016.
 */

var loginRoutesHandlers = {
	login: function (req, res) {
		console.log(req.body);
		console.log(res.body);
		res.json({status: true});
	}
};
module.exports = loginRoutesHandlers;