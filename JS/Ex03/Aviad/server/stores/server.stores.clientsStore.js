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
		console.log('exists',clientsStore.clientExists(username));
		console.log(data);
		data[username]['token'] = token;
	},
	getToken: (username) =>{
		return data[username]['token'] || null;
	},
	setCalcResult : (username, calcResult)=>{
		if(this.clientExists(username)){
			data[username]['calcResult'] = calcResult;
		}
	},
	getCalcResult : (username)=>{
		return data[username]['calcResult'] || 0;
	}

};
module.exports = clientsStore;