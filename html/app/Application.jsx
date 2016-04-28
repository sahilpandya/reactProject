var React = require('react');
var MainApp=require('./components/MainApp.jsx');
var Header=require('./components/Header.jsx');
var Footer=require('./components/Footer.jsx');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Application = React.createClass({
    render: function() {
        return (
        	<html>
				<head lang="en">
				<meta charSet="utf-8"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>aurigait.com</title>
				<link href="../css/app.caz.css" rel="stylesheet"/>
				</head>
		<body>
        	<div className="container">
	            <div className="home">
	            	<div className="header">
	                    <div className="page-header row">
	                        <Header/>
	                    </div>
	                </div>
	                <RouteHandler/>
	                <div className="footer">
	                	<Footer/>
	                </div>
	            </div>
            </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
            <script src="../js/app.caz.js"></script>
        </body>
        </html>
        )
    }
});


module.exports=Application;
