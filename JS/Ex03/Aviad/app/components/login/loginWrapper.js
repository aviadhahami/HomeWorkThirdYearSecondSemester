/**
 * Created by aviad on 6/8/2016.
 */
import React from 'react';
import {withRouter} from 'react-router'
import Api from '../../stores/Api';


let loginWrapper = withRouter(React.createClass({
	clicked(){
		this.props.router.replace('calculator')
	},
	render(){
		return (
			<div>
				<h2>Hello Guest, Please login</h2>

				<button onClick={this.clicked}>click</button>
			</div>
		)
	}
}));

export default loginWrapper;