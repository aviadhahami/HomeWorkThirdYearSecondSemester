/**
 * Created by aviad on 6/8/2016.
 */
import React from 'react';
import {withRouter} from 'react-router'
import {Button} from 'react-bootstrap'
import Api from '../../stores/Api';


let loginWrapper = withRouter(React.createClass({
	redirectIfAuth(isAuth){
		if (isAuth) {
			this.props.router.replace('calculator');
		}
		console.log(isAuth);
	},
	componentWillMount(){
		let { isAuth } = this.props.auth;
		this.redirectIfAuth(isAuth);
	},
	componentWillUpdate(nextProps){
		let {isAuth} = nextProps.auth;
		this.redirectIfAuth(isAuth)
	},
	test(e){
		e.preventDefault();
		console.log('e',e);
		console.log(this.refs.password.value);
	},
	render(){
		return (
			<div className="col-md-10">
				<form onSubmit={this.test}>
					<h2>Hello Guest, Please login</h2>
					<div className="form-group">
						<label htmlFor="username">Username: </label>
						<input type="text" className="form-control" name="username" ref="username" placeholder="Enter username"/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password: </label>
						<input type="password" className="form-control" name="password" ref="password"/>
					</div>
					<Button type="submit" className="btn btn-primary">
						Login
					</Button>
					&nbsp;
					<Button type="reset" className="">
						Reset
					</Button>
				</form>
			</div>
		)
	}
}));

export default loginWrapper;