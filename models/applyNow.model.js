const mongoose = require('mongoose');
const validator = require('validator');

const applySchema = mongoose.Schema({
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
    zipCode: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    }
})
const ApplyNow = new mongoose.model('userApply', applySchema);
module.exports = ApplyNow;