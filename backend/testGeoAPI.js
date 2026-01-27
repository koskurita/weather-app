// testCityToLatLon.js
import axios from 'axios';

// Replace with any city you want to test
const city = 'London';
const API_KEY = 'd6ac36732c6afb6092afe8a045964be6'; // <-- put your API key here

async function getCoordinates(city) {
  try {
    // Build full geocoding URL, like your browser test
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
      city
    )}&limit=5&appid=${API_KEY}`;

    const res = await axios.get(url);

    if (!res.data || res.data.length === 0) {
      console.log('City not found');
      return;
    }

    console.log(`Results for city: ${city}`);
    res.data.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name}, ${item.country} - lat: ${item.lat}, lon: ${item.lon}`);
    });
  } catch (err) {
    console.error('Error fetching coordinates:', err.response ? err.response.data : err.message);
  }
}

// Run the test
getCoordinates(city);
