const mongoose = require("mongoose");
const validator = require('validator');

const referralSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    yourName: {
        type: String,
        required: true
    },
    yourEmail: {
        type: String,
        required: true,
        validate(value) {
            if (validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
    yourPhone: {
        type: Number,
        required: true
    },
})

const Referral = new mongoose.model('userReferral', referralSchema);
module.exports = Referral;