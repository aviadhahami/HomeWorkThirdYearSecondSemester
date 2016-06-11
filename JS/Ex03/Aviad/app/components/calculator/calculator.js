import React from 'react';
import ResultField from './resultField'
import KeyBoard from './keyboard'
import {withRouter} from 'react-router'
import Api from '../../stores/Api';
import {connect} from 'cartiv';
import calcStore from '../../stores/calcStore';


let Calculator = withRouter(React.createClass({
	mixins:[
		connect(calcStore,'calcResult')
	],
	componentWillMount(){
		let { isAuth, username } = this.props.auth;
		if (!isAuth) {
			this.props.router.replace('login');
		}

	},
	componentDidMount(){
		Api.calc.getLastResult(username);
	},
	onKeyPress: function(val){
		var theInput = this.state.value + val.toString();
		if(theInput.length>10){
			theInput = theInput.substring(0,10);
		}
		theInput = theInput.indexOf('0') === 0 ? theInput.substring(1,theInput.length): theInput;
		this.setState({value:theInput});
	},
	onReset: function(val){
		this.setState({value: 0});
	}
	,
	onCalculate: function(){
		var theInput = this.state.value;
		if(theInput.length>10){
			theInput = theInput.substring(0,10);
		}
		let {username, token} = this.props.auth
		let result = eval(theInput);
		Api.calc.setCalcResult(username,token,result);
		this.setState({value:  result });
	},
	render: function(){
		return (
			<div className="Panel">
				<ResultField value={this.state.value} />
				<KeyBoard onKeyPress={this.onKeyPress}  onReset={this.onReset} onCalculate={this.onCalculate} />
			</div>
		)
	}
}));

module.exports = Calculator;
