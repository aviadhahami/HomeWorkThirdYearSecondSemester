/**
 * Created by aviad on 6/7/2016.
 */
import tokenGenerator from './../../external_modules/server.external_modules.tokenGenerator';
import clientsStore from '../../stores/server.stores.clientsStore';
const _userCreds = {
	'302188347' : 'aviad',
	'admin': 'admin'
};
let verifyUserCreds = (username,password) =>{
	return _userCreds.hasOwnProperty(username) ? _userCreds[username] === password : false;
};
var AuthServices = {
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
			res.status(400).json({err:'bad request'});
		}

	}
};
export default AuthServices;