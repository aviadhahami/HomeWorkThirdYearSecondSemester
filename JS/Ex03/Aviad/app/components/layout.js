/**
 * Created by aviad on 5/13/2016.
 */

import React from 'react';
import {Navbar, Nav, NavItem, Grid, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

let Layout = React.createClass({
	render(){
		console.log(this.props);
		return(
			<div>
				<Navbar>
					<Navbar.Header>
						<LinkContainer to="profile">
							<Navbar.Brand>
								<a href="#">{this.props.route.username}</a>
							</Navbar.Brand>
						</LinkContainer>
					</Navbar.Header>
					<Nav>
						<LinkContainer to="profile">
							<NavItem>
								Profile
							</NavItem>
						</LinkContainer>
						<LinkContainer to="calculator">
							<NavItem>
								Calculator
							</NavItem>
						</LinkContainer>
						<LinkContainer to="readme">
							<NavItem>
								Readme
							</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar>
				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={12}>
							{this.props.children}
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
});


export default Layout;

