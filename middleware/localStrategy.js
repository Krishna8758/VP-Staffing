const passport = require("passport");
const passportLocal = require("passport-local");
const Admin = require('../models/admin.model')
const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    async (email, password, cb) => {
        try {
            const user = await Admin.findOne({ email });
            if (user) {
                if (user.password === password) {
                    return cb(null, user);
                } else {
                    return cb(null, false);
                }
            } else {
                return cb(null, false);
            }
        } catch (error) {
            return cb(error)
        }
    }
))