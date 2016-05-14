/**
 * Created by aviad on 5/14/2016.
 */
import React from 'react';

var ResultField = React.createClass({
	render: function(){
		return (  <input type="text" className="calc-input" maxlength="10" value={this.props.value} readonly/> )
	}
});

module.exports = ResultField;