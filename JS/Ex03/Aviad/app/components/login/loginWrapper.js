/**
 * Created by aviad on 6/8/2016.
 */
import React from 'react';

let loginWrapper = React.createClass({
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
	render:()=>{
		return (
			<h2>login warpper</h2>
		)
	}
});

export default loginWrapper;