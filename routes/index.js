const routes = require('express').Router();
const client = require("./client.routes")
const admin = require("./admin.routes");
const { indexRenderAction } = require('../controller/client/index.controller');

routes.use('/admin', admin)
routes.use('/', client)


module.exports = routes
