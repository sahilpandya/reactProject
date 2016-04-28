'use strict';

var React = require('react');
var path = require('path');
var Router = require("react-router");
var routes = require("./Routes.jsx"); //important !!

var currentDate = Date.now() + " world";
module.exports = function (req, res) {
    console.log( req.originalUrl);
    Router.run(routes, req.originalUrl , function (Handler) {
    	//var cssFile = req.info.host + '/css/app.caz.css';
    	//var jsFile = req.info.host + '/js/app.caz.js';
        var content = React.renderToString(React.createElement(Handler, { stateFromServer: '' }));
        console.log(content);
        /*var head = `<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>`;
         var response = `
     <!DOCTYPE html>
     <html>
         ${head}
         <link href="${cssFile}" rel="stylesheet"/>
         <script src="${jsFile}"></script>
         <body>
             <div id="mountPoint">
                //${content}
             </div>
         </body>
     </html>`;*/
    res.send(content);
    });
};
