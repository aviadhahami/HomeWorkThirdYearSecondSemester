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

	},
	render(){
		return (
			<div>
				<h2>Hello Guest, Please login</h2>
				
				<button onClick={this.clicked}>click</button>
			</div>
		)
	}
});

export default loginWrapper;