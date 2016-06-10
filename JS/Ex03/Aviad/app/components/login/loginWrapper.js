/**
 * Created by aviad on 6/8/2016.
 */
import React from 'react';
import Api from '../../stores/Api';


let loginWrapper = React.createClass({
	componentDidMount(){
		// Ajax call to verify token goes here
	},
	clicked(){
		console.log('clicked');
		Api.auth.onAttemptTokenLogin(1,2);
	},
	render(){
		return (
			<div>
				<h2>login wrapper</h2>
				<button onClick={this.clicked}>click</button>
			</div>
		)
	}
});

export default loginWrapper;