require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log(err);
    })