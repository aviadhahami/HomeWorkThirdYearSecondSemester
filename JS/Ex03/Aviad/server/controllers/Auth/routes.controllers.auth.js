/**
 * Created by aviad on 6/7/2016.
 */
'use strict';
let tokenGenerator = require('./../../external_modules/server.external_modules.tokenGenerator');
let clientsStore = require('../../stores/server.stores.clientsStore');
const _userCreds = {
	'302188347' : 'aviad',
	'admin': 'admin'
};
let verifyUserCreds = (username,password) =>{
	return _userCreds.hasOwnProperty(username) ? _userCreds[username] === password : false;
};
var AuthServices = {
	// Regular login using un and pass
	login:  (req, res) => {
		if(req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')){
			if(verifyUserCreds(req.body.username,req.body.password)){
				let token = tokenGenerator.generate();
				clientsStore.setToken(req.body.username,token);
				res.status(200).json({token:token})
			}else{
				res.status(401).json({err: 'wrong creds'});
			}
		}else{
			res.status(400).json({err:'Missing critical data'});
		}

	},
	// Token login using un and token as param
	tokenLogin : (req,res)=>{
		console.log('recevied req,' + req.body);
		if(req.body.hasOwnProperty('username') && req.params.hasOwnProperty('token')){
			if(clientsStore.clientExists(req.body.username)){
				if(AuthServices.verifyClientToken(req.body.username, req.params.token)){
					res.status(200).json({auth: 'verified'});
				}else{
					res.status(401).json({err:'wrong creds'});
				}
			}else{
				res.status(403).json({err:'user doesn\'t exist'});
			}
		}else{
			res.status(400).json({err:'missing critical data'});
		}
	},
	verifyClientToken:(username, token) => {
		return clientsStore.getToken(username) === token;
	}
};
module.exports = AuthServices;