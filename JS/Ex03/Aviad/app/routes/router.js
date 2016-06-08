import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory} from 'react-router'
import Layout from '../components/layout';
import Profile from '../components/profile/profile';
import Readme from '../components/readme/readme';
// import Calculator from '../components/calculator/calculator';
import AuthContainer from '../components/authContainer/authContainer';

import { createHashHistory } from 'history';


// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


let AppRouter = React.createClass({
	render(){
		return(
			<Router history={ appHistory }>
				<Route path="/" component={Layout}>
					<IndexRoute component={Profile}/>
					<Route path="profile" component={Profile}/>
					<Route path="calculator" component={AuthContainer} />
					<Route path="readme" component={Readme}/>
					</Route>
			</Router>
		)
	}
});

module.exports = AppRouter;