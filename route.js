var mobileWebHandler = require('./html/app/server.jsx');
module.exports = [
{
    method: 'GET',
    path: '/{title?}',
    handler: mobileWebHandler
}
];