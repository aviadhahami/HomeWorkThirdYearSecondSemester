/**
 * Created by aviad on 6/8/2016.
 */
import React from 'react';
import {connect} from 'cartiv';
import authStore from '../../stores/authStore'
import Api from '../../stores/Api';


let clicked = (e)=>{
	Api.auth.onAttemptTokenLogin();
};
let loginWrapper = React.createClass({
	mixins:[
		connect(authStore)
	],
	componentDidMount(){
		// Ajax call to verify token goes here
	},
	render(){
		console.log(this);
		let {username} = this.props.state;
		return (
			<div>
				<h2>login wrapper</h2>
				<button onClick={clicked}>click</button>
				<h1>{username}</h1>
			</div>
		)
	}
});

export default loginWrapper;