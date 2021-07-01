const express = require('express');
const app = express();
const axios = require("axios");
require('dotenv').config();
const {
    PORT,
} = process.env

const apiURL = 'https://api.dazelpro.com/mobile-legends/hero';

app.get("/testing", async (req, res) => {
    try {
        const data = await axios.get(apiURL);
        res.status(200).send({
            data: data.data,
        });	
    } catch(err) {
        res.status(500).send({message: err.message});
    }
});

app.listen(PORT, () => {
    console.log('Application running in port : ' + PORT);
});

module.exports = app;