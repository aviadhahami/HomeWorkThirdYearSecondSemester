/**
 * Created by aviad on 6/7/2016.
 */
'use strict';
let data = {};
let clientsStore = {
	createClient: (username)=>{
		if (!data.hasOwnProperty(username)) {
			data[username] = {}
		}
	},
	clientExists: (username)=>{
		return data.hasOwnProperty(username);
	},
	setToken: (username,token)=> {
		if(!clientsStore.clientExists(username)){
			clientsStore.createClient(username);
		}
		data[username]['token'] = token;
	},
	getToken: (username) =>{
		return data && data[username] ? data[username]['token'] || null : null;
	},
	setCalcResult : (username, calcResult)=>{
		if(clientsStore.clientExists(username)){
			data[username]['calcResult'] = calcResult;
		}
	},
	getCalcResult : (username)=>{
		return data && data[username] ? data[username]['calcResult'] || 0 : 0;
	}

};
module.exports = clientsStore;