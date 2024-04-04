const passport = require('passport');
const { checkAdmin } = require('../middleware/check');
const session = require('express-session');
require('../middleware/localStrategy');
const adminController = require('../controller/admin/admin.controller')

const routes = require('express').Router();

routes.use(session({
    name: "admin",
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET_KEY_ADMIN,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

routes.use(passport.initialize())
routes.use(passport.session())


routes.get('/login', checkAdmin, adminController.adminLogin);
routes.post(
    "/admin-login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    adminController.adminLoginPass
);
routes.get('/admin-logout', adminController.logout);
routes.post('/admin-register', adminController.adminRegister);
routes.post('/admin-update', adminController.adminUpdateOrRegister);


module.exports = routes
