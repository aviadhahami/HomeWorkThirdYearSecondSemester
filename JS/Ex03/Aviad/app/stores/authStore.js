/**
 * Created by aviad on 6/8/2016.
 */

import {createStore} from 'cartiv';
import Api from './Api';

let authStore = createStore({
		api: Api,
		name: 'auth'
		// TODO: Figure out better wtf the actions filter means
		// actions:['onChange']
	},
	{
		getInitialState(){
			return{username:'',
				token:'',
				isAuthorized:false}
		},
		onChange(state){
			console.log('change!');
			this.setState(state);
		},
		onAttemptLogin(username,password){
			$.post('/login',{username: username, password: password}).then( response =>{
				console.log(response);
			}, err =>{
				console.log(err);
			})
		},
		onAttemptTokenLogin(username,token){
			fetch('http://localhost:3000/login/'+token,{method:'post'}).then(res=>{
				console.log(res);
			}, err=>{
				console.log(err);
			})
		}

	});

export default authStore;