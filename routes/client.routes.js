const { indexRenderAction, applyNowRenderAction, govtSolutionRenderAction, aboutUsRenderAction, contactUsRenderAction, clientRenderAction, referFriendRenderAction, benefitRenderAction } = require('../controller/client/index.controller');

const routes = require('express').Router();

routes.get('/', indexRenderAction)
routes.get('/applynow', applyNowRenderAction)
routes.get('/govt-sol', govtSolutionRenderAction)
routes.get('/about-us', aboutUsRenderAction)
routes.get('/contact-us', contactUsRenderAction)
routes.get('/client', clientRenderAction)
routes.get('/refer-frnd', referFriendRenderAction)
routes.get('/benefits', benefitRenderAction)


module.exports = routes
