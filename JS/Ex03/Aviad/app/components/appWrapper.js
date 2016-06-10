/**
 * Created by aviad on 6/10/2016.
 */


import React from 'react';

import {connect} from 'cartiv';
import authStore from '../stores/authStore';
import Layout from './layout';

let AppWrapper = React.createClass({
	mixins:[
		connect(authStore)
	],
	render(){
		let username = this.state.username || 'Guest';
		return(
			<Layout username={username}>
				{React.cloneElement(
					this.props.children,{
						auth: this.state.auth
					})}
			</Layout>
		)
	}
});
export default AppWrapper;