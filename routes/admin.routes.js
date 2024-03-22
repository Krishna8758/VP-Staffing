const passport = require('passport');
const { checkAdmin } = require('../middleware/check');
const session = require('express-session');
require('../middleware/localStrategy');

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


// routes.get('/login', checkAdmin, loginAdmin);
// routes.post(
//     "/login-data",
//     passport.authenticate("local", { failureRedirect: "/admin/login" }),
//     loginAdminPass
// );


module.exports = routes
