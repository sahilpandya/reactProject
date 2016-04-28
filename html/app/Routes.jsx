'use strict';
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Homepage=require('./components/Home.jsx');
var Careers=require('./components/Careers.jsx');
var Portfolio=require('./components/Portfolio.jsx');
var Contact=require('./components/Contact.jsx');
var Application = require('./Application.jsx');

var Routes = (
    <Route name='app' path='/' handler={Application}>
    	<DefaultRoute handler={Homepage} />
        <Route name="Homepage" path="Homepage" handler={Homepage}/>
        <Route name="careers" path="careers" handler={Careers}/>
        <Route name="Portfolio" path="Portfolio" handler={Portfolio}/>
        <Route name="Contact" path="Contact" handler={Contact}/>
    </Route>
);

module.exports = Routes;