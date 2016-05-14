/**
 * Created by aviad on 5/14/2016.
 */

import React from 'react';
var Button = React.createClass({

	handleClick: function(){
		if(this.props.onMouseDown)
			this.props.onMouseDown(this, this.props.value);
	},

	render: function(){
		return <button className="calc-button" onMouseDown={this.handleClick}>{this.props.value}</button>
	}
});


module.exports = Button;