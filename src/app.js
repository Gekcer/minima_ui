require('dotenv').config();
const express = require('express');
const axios = require('axios');

const MINIMA_HOST = process.env.MINIMA_HOST;
const MINIMA_PORT = process.env.MINIMA_PORT;

const UI_HOST = process.env.UI_HOST;
const UI_PORT = process.env.UI_PORT;

app = express();

console.log(`${MINIMA_HOST}:${MINIMA_PORT}`);

app.get('/start_center', async(request, response) => {
    try {
        const res = await axios.get(`${MINIMA_HOST}:${MINIMA_PORT}`);
        response.send(res.data);
    } catch (error) {
        response.send(`Ошибка: ${error.message}`);
    }
})

app.listen(UI_PORT, () => {
    console.log(`listen to ${UI_PORT}`);
})