/**
 * Created by aviad on 6/7/2016.
 */

let clientsStore = require('../../stores/server.stores.clientsStore');
let AuthServices = require('../auth/routes.controllers.auth');

let CalcServices = {
	storeCalcData: (req, res)=> {
		if (req.body.hasOwnProperty('username') && req.params.hasOwnProperty('val')) {
			if(AuthServices.verifyClientToken(req.body.username,req.params.val)){
				clientsStore.setCalcResult(req.body.username,req.params.val);
			}else{
				res.status(401).json({err :'Unauthorized request'});
			}
		}else{
			res.status(400).json({err:'missing critical data'});
		}
	},
	retrieveCalcData: (req, res)=>{
		if (req.body.hasOwnProperty('username')) {
			res.status(200).json({lastCalc:clientsStore.getCalcResult(req.body.username)});
		}else{
			res.status(400).json({err:'no user was specified'});
		}
	}
};

module.exports = CalcServices;