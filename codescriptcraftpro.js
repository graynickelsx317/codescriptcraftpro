// weather_forecast_api.js

const express = require('express');
const axios = require('axios');

const app = express();

// Get weather forecast for a city
app.get('/weather/:city', async (req, res) => {
    const { city } = req.params;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
        const weatherData = response.data;
        res.status(200).json({ weather: weatherData.weather[0].description, temperature: weatherData.main.temp });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data' });
    }
});

// Listen on port
const port = 3000;
app.listen(port, () => {
    console.log(`Weather forecast API running on http://localhost:${port}`);
});
