var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Reflux = require('reflux');

var MainApp = React.createClass({
    render: function() {
        return (
            <div>
				<RouteHandler/>
  	        </div>
        )
    }
});

module.exports=MainApp;
