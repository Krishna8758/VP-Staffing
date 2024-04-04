require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('./db/conn');

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false, limit: "2048mb" }));
app.use(require('./routes'))

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
})
