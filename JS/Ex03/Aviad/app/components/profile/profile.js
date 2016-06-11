/**
 * Created by aviad on 5/13/2016.
 */
import React from 'react';
import {Jumbotron, Button, Image, Media, Col, Row} from 'react-bootstrap';
import QuotePanel from '../quotePanel/quotePanel'
const profilePic = require('../../assets/img/profile.jpg');

let Profile = React.createClass({
	render(){
		return(
			<div>
				<Jumbotron>
					<Media>
						<Media.Left align="middle">
							<Image width={'auto'} height={300} src={profilePic} rounded/>
						</Media.Left>
						<Media.Body>
							<h1>Aviad Hahami</h1>
							<p>
								After two years with AngularJS I've decided I need something fresh.
								<br/>
								As a result - I've started learning React.
								<br/>
								Hope you enjoy this :)
							</p>
							<br/>
							<Row>
								<Col xs={6} md={4} >
									<Button bsStyle="primary">
										<a href="https://github.com/aviadhahami" target="_blank">See my GitHub</a>
									</Button>
								</Col>
								<Col xs={6} md={4} >
									<Button bsStyle="success">
										<a href="https://www.linkedin.com/in/aviad-hahami-09058133" target="_blank">See my linkedin</a>
									</Button>
								</Col>
							</Row>
						</Media.Body>
					</Media>
				</Jumbotron>
				<QuotePanel/>
			</div>
		)
	}
});


export default Profile;

