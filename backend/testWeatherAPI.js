// testWeather3_fullURL.js
import axios from 'axios';

// Replace with actual latitude and longitude
const lat = 33.44; // Example: latitude
const lon = -94.04; // Example: longitude
const API_KEY = 'd6ac36732c6afb6092afe8a045964be6'; // <-- put your 3.0 API key here

async function getWeather(lat, lon) {
  try {
    // Build full URL like browser
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`;

    // Optional: add User-Agent to mimic browser request
    const res = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    // Clean output
    console.log(`Weather data for lat=${lat}, lon=${lon}:`);
    console.log('Current:', res.data.current);
    console.log('Daily forecast:', res.data.daily);
  } catch (err) {
    console.error('Error fetching weather:', err.response ? err.response.data : err.message);
  }
}

// Run the function
getWeather(lat, lon);
