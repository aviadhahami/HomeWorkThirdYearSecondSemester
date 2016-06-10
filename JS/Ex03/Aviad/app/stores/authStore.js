/**
 * Created by aviad on 6/8/2016.
 */

import {createStore} from 'cartiv';
import Api from './Api';
import $ from 'jquery'

let authStore = createStore({
		api: Api,
		name: 'auth'
		// TODO: Figure out better wtf the actions filter means
		// actions:['onChange']
	},
	{
		getInitialState(){
			return{
				username: '',
				isAuth: false,
				token: ''

			}
		},
		onAttemptLogin(username,password){
			$.post('/login',{username: username, password: password}).then( response =>{
				console.log(response);
			}, err =>{
				console.log(err);
			})
		},
		onAttemptTokenLogin(username,token){
			this.setState({username:'david'});
			$.post('/login/'+token,{username:username}).then(res=>{
					console.log('res',res);
					console.log('store changed state', this.state);
				},
				err=>{
					console.log('err',err);
				});
		}

	});

export default authStore;