import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory} from 'react-router'
import Layout from '../components/layout';
import Profile from '../components/profile/profile';
import Readme from '../components/readme/readme';
import Calculator from '../components/calculator/calculator';
import loginWrapper from '../components/login/loginWrapper';
import { createHashHistory } from 'history';
import {connect} from 'cartiv';
import authStore from '../stores/authStore';
import Api from '../stores/Api';

// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


let AppRouter = React.createClass({
	mixins:[
		connect(authStore,'auth')
	],
	componentWillMount(){
		console.log('comp mounted,');
		// Api.auth.onAttemptTokenLogin(this.state.username, this.state.token);
	},
	render(){
		console.log('comp changed State',this.state);
		let { isAuth } = this.state.auth;
		return(
			<Router history={ appHistory } auth={this.state.auth}>
				<Route path="/" component={Layout} isAuth={this.state.auth.isAuth} userName={this.state.auth.username}>
					<IndexRoute component={Profile}/>
					<Route path="profile" component={Profile}/>
					<Route path="calculator" component={isAuth? Calculator : loginWrapper}/>
					<Route path="readme" component={Readme}/>
				</Route>
			</Router>
		)
	}
});

module.exports = AppRouter;