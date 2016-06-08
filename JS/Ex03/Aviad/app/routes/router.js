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
		connect(authStore)
	],
	getInitialState(){
	},
	componentWillMount(){
		console.log('comp mounted,');
		if (this && this.state) {
			Api.auth.onAttemptTokenLogin(this.state.username, this.state.token);
		}
	},
	render(){
		let { isAuthorized } = this.state || false;
		return(
			<Router history={ appHistory }>
				<Route path="/" component={Layout}>
					<IndexRoute component={Profile}/>
					<Route path="profile" component={Profile}/>
					<Route path="calculator" component={isAuthorized? Calculator : loginWrapper} state={this.state='temp'}/>
					<Route path="readme" component={Readme}/>
				</Route>
			</Router>
		)
	}
});

module.exports = AppRouter;