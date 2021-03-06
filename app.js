require('dotenv').config()
const db = require('./database/connection');

const express = require("express");
const app = express();
const router = require('./routes');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/',router);


app.listen(port, () => console.log(`App listening from port ${port}`));
