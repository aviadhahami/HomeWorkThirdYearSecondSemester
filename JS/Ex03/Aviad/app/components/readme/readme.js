/**
 * Created by aviad on 5/13/2016.
 */
import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';

let Readme = React.createClass({
	render(){
		return(
			<Row>
				<Col md={6} mdPush={6}>
					<Panel>
						<h2>Hardest Part</h2>
						<p>Figuring out all the Webpack modules and bundle logic</p>
					</Panel>
				</Col>
				<Col md={6} mdPull={6}>
					<Panel>
						<h2>Nicest Part</h2>
						<p>Seeing Webpack working properly and writing ES6</p>
					</Panel>
				</Col>
			</Row>

		)
	}
});


export default Readme;

