var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('./routes/router.js');
require('./css/style.css');
require('./css/bootstrap-3.3.6-dist/css/bootstrap.min.css');
require('./css/bootstrap-3.3.6-dist/css/bootstrap-theme.min.css');

ReactDOM.render(
	<Router />,
	document.getElementById('app')
);