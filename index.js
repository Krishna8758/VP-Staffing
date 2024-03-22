require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
require('./db/conn');
const routes = require('./routes');

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false, limit: "2048mb" }));
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
})
