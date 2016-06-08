import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory} from 'react-router'
import Layout from '../components/layout';
import Profile from '../components/profile/profile';
import Readme from '../components/readme/readme';
import Calculator from '../components/calculator/calculator';
import AuthContainer from '../components/authContainer/authContainer';
import loginWrapper from '../components/login/loginWrapper';

import { createHashHistory } from 'history';


// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


let AppRouter = React.createClass({
	getInitialState: ()=>{
		return {
			username:'',
			token:'',
			isAuthorized: false
		}
	},
	componentDidMount: ()=>{
		// Ajax call to verify token goes here
	},
	render(){
		let { isAuthorized } = this.state;
		return(
			<Router history={ appHistory }>
				<Route path="/" component={Layout}>
					<IndexRoute component={Profile}/>
					<Route path="profile" component={Profile}/>
					<Route path="calculator" component={isAuthorized? Calculator : loginWrapper}/>
					<Route path="readme" component={Readme}/>
				</Route>
			</Router>
		)
	}
});

module.exports = AppRouter;