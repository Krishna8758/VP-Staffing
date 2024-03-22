const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
});


const User = new mongoose.model('userLogin', userSchema);
module.exports = User;