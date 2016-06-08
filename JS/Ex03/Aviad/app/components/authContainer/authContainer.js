/**
 * Created by aviad on 6/8/2016.
 */

import React from 'react';
let AuthContainer = React.createClass({
	getInitialState:()=>{
		return {
			number: 7
		}
	},
	render(){
		let {number} = this.state;
		return (
			<div>{number}</div>
		);
	}
});

export default AuthContainer;