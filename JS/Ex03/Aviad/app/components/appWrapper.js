/**
 * Created by aviad on 6/10/2016.
 */


import React from 'react';

import {connect} from 'cartiv';
import authStore from '../stores/authStore';
import Layout from './layout';
import Api from '../stores/Api';

let AppWrapper = React.createClass({
	mixins:[
		connect(authStore,'auth')
	],
	componentDidMount(){
		let {username, token} = this.state.auth;
		Api.auth.onAttemptTokenLogin(username,token);
	},
	render(){
		let {isAuth} = this.state.auth
		let username = isAuth? this.state.auth.username : '';
		return(
			<Layout username={username} isAuth={isAuth}>
				{React.cloneElement(
					this.props.children,{
						auth: this.state.auth
					})}
			</Layout>
		)
	}
});
export default AppWrapper;