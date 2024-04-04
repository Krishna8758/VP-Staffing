const Admin = require("../../models/admin.model");

class adminController {
    async adminLogin(req, res, next) {
        try {
            return res.render('admin/login');
        } catch (error) {
            return next(error);
        }
    }
    async   adminLoginPass(req, res, next) {
        try {
            return res.render('/admin/user-data');
        } catch (error) {
            return next(error);
        }
    }
    async logout(req, res, next) {
        try {
            req.logout((err) => {
                res.json(err);
            })
            res.redirect('back');
        } catch (error) {
            return next(error);
        }
    }
    async adminRegister(req, res, next) {
        try {
            const adminData = new Admin({
                email: req.body.email,
                password: req.body.password
            }).save();
            res.status(201).json({
                message: 'Admin successfully registered',
                status: 201
            })
        } catch (error) {
            res.status(500).json({
                message: error.message,
                status: 500
            })
        }
    }
    async adminUpdateOrRegister(req, res, next) {
        try {
            const oldEmail = req.body.oldEmail;
            const adminData = await Admin.findOne({ email: oldEmail });

            if (adminData) {
                const adminUpdatedData = await Admin.findByIdAndUpdate(
                    {
                        _id: adminData._id,
                    },
                    {
                        $set: {
                            email: req.body.email,
                            password: req.body.password
                        }
                    }
                ).then(() => {
                    res.status(200).json({
                        message: 'Email updated successfully',
                        status: 200
                    })
                }).catch((error) => {
                    res.status(500).json({
                        message: error.message,
                        status: 500
                    })
                })
            } else {
                const adminData = new Admin({
                    email: req.body.email,
                    password: req.body.password
                }).save();
                res.status(201).json({
                    message: 'Admin successfully registered',
                    status: 201
                })
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
                status: 500
            })
        }
    }
}

module.exports = new adminController();