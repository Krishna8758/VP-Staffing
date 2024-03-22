const mongoose = require('mongoose');
const validator = require('validator');

const contactUsSchema = mongoose.Schema({
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
    inquiry: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})
const ContactUs = new mongoose.model('userContact', contactUsSchema);
module.exports = ContactUs;