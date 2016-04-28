
'use strict';

var React = require('react');
var Router = require("react-router");
var routes = require("./Routes.jsx"); //important !!
var currentDate = Date.now() + " world";
   
module.exports = function () {
    Router.run(routes, Router.HistoryLocation, function (Handler) {
        React.render(<Handler />, document);
    });
};