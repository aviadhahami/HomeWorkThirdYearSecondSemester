/**
 * Created by aviad on 6/8/2016.
 */

import {createStore} from 'cartiv';
import Api from './Api';
import $ from 'jquery'
const UN ='AUTH_STORE_UN';
const TKN='AUTH_STORE_TKN';

let authStore = createStore({
		api: Api,
		name: 'auth'
		// TODO: Figure out better wtf the actions filter means
		// actions:['onChange']
	},
	{
		getInitialState(){
			return{
				auth:{
					username: localStorage[UN] || '',
					isAuth: false,
					token: localStorage[TKN] || ''

				}
			}
		},
		onAttemptLogin(username,password){
			$.post('/login',{username: username, password: password}).then( response =>{
				let auth = Object.assign({},this.state.auth);
				auth.isAuth = true;
				auth.token = response.token;
				this.setState({auth:auth})
			}, err =>{
				let auth = Object.assign({},this.state.auth);
				auth.isAuth = false;
				auth.username='';
				auth.token=''
				this.setState({auth:auth})
			})
		},
		onAttemptTokenLogin(username,token){
			$.post('/login/'+token,{username:username}).then(res=>{
					console.log('res',res);
					let auth = Object.assign({},this.state.auth);
					auth.isAuth = true;
					this.setState({auth:auth})
				},
				err=>{
					console.log('err',err);
				});
		},
		onDummyLogin(){
			let auth = Object.assign({},this.state.auth);
			auth.isAuth = true;
			this.setState({auth:auth})
		}

	});

export default authStore;