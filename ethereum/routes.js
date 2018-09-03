const routes = require('next-routes')();
routes
.add("/add/new","/add/new")
.add("/view/:address/:index","/view/show")
// .add("/campaigns/:address/requests","/campaigns/requests/index")
// .add("/campaigns/:address/requests/new","/campaigns/requests/new")
module.exports = routes;
