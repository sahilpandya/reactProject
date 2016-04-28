/*'use strict';

require("babel/register");
var express = require('express');
var path = require('path');
var globalPath = "./html/app";
var renderToServer = require(globalPath + "/server.jsx");

var app = express();

var currentDate = Date.now();
//app.use(favicon(__dirname + '/html/app/favicon.ico'));
app.use(express.static(__dirname + '/html/app/'));
/*app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/Portfolio', function(req, res) {
    res.render('index.html');
});
app.get('/careers', function(req, res) {
    res.render('index.html');
});
app.get('/Contact', function(req, res) {
    res.render('index.html');
});
*/
 /*var favicon = new Buffer('AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREQAAAAAAEAAAEAAAAAEAAAABAAAAEAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD8HwAA++8AAPf3AADv+wAA7/sAAP//AAD//wAA+98AAP//AAD//wAA//8AAP//AAD//wAA', 'base64'); 
 app.get("/favicon.ico", function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Length', favicon.length);
  res.setHeader('Content-Type', 'image/x-icon');
  res.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
  res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  res.end(favicon);
 });
app.use(renderToServer);

app.listen(process.env.PORT || 3000);

console.log(currentDate + 'Server abcd running at http://localhost:3000/');*/

/*'use strict';
require("babel/register");
var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port: 8000 });
server.register({
  register: require('hapi-router'),
  options: {
    routes: './route.js'
  },
}, function (err) {
  if (err) throw err;
});

server.start(function () {
    console.log('Server running :', server.info);
});*/


require("babel/register");
var express = require('express');
var path = require('path');
var globalPath = "./html/app";
var bodyParser = require('body-parser')
var renderToServer = require(globalPath + "/server.jsx");

var app = express();

var currentDate = Date.now();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("hogan-express"));
app.set("view engine", "html");
app.set("layout", "layout");
app.set('views', path.join(__dirname, '/html/app/'));
var favicon = new Buffer('AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREQAAAAAAEAAAEAAAAAEAAAABAAAAEAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD8HwAA++8AAPf3AADv+wAA7/sAAP//AAD//wAA+98AAP//AAD//wAA//8AAP//AAD//wAA', 'base64'); 
 app.get("/favicon.ico", function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Length', favicon.length);
  res.setHeader('Content-Type', 'image/x-icon');
  res.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
  res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  res.end(favicon);
 });
app.use(renderToServer);

app.listen(process.env.PORT || 3000);

console.log(currentDate + 'Server abcd running at http://localhost:3000/');