import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const API_KEY = process.env.API_KEY;

// GET /weather?city=CityName
router.get('/', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City parameter is required' });

  try {
    // 1️⃣ Geocoding: city -> lat/lon
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
      city
    )}&limit=1&appid=${API_KEY}`;

    const geoRes = await axios.get(geoUrl);

    // If no match is found
    if (!geoRes.data || geoRes.data.length === 0) {
      return res.status(404).json({ error: `City "${city}" not found` });
    }

    const { lat, lon, name, country } = geoRes.data[0];

    // 2️⃣ One Call 3.0: lat/lon -> current weather
    const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${API_KEY}`;

    const weatherRes = await axios.get(weatherUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    const tempC = weatherRes.data.current.temp;
    const tempF = (tempC * 9/5 + 32).toFixed(1);

    // 3️⃣ Return simplified JSON
    res.json({
      city: name,
      country,
      temperature: {
        celsius: tempC,
        fahrenheit: parseFloat(tempF)
      },
      weather: weatherRes.data.current.weather[0].description
    });
  } catch (err) {
    console.error('Error fetching weather:', err.response ? err.response.data : err.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

export default router;
