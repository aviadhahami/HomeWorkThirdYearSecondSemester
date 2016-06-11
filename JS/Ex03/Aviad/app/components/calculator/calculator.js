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
		let { isAuth}= this.props.auth;
		if (!isAuth) {
			this.props.router.replace('login');
		}
	},
	componentDidMount(){
		let { username }= this.props.auth;
		// console.log(Api);
		Api.calc.onGetLastResult(username);
	},
	onKeyPress: function(val){
		var theInput = this.state.calcResult + val.toString();
		if(theInput.length>10){
			theInput = theInput.substring(0,10);
		}
		theInput = theInput.indexOf('0') === 0 ? theInput.substring(1,theInput.length): theInput;
		this.setState({calcResult:theInput});
	},
	onReset: function(val){
		this.setState({calcResult: 0});
	}
	,
	onCalculate: function(){
		var theInput = this.state.calcResult;
		if(theInput.length>10){
			theInput = theInput.substring(0,10);
		}
		let {username, token} = this.props.auth
		let result = eval(theInput);
		Api.calc.onSetCalcResult(username,token,result);
		this.setState({calcResult:  result });
	},
	render: function(){
		return (
			<div className="Panel">
				<ResultField value={this.state.calcResult} />
				<KeyBoard onKeyPress={this.onKeyPress}  onReset={this.onReset} onCalculate={this.onCalculate} />
			</div>
		)
	}
}));

module.exports = Calculator;
