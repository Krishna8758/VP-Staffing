const express = require('express');
const cors = require('cors');
const app = express();
require('./db/conn');

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
})
