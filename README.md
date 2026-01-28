# Weather Dashboard


A simple web application that allows users to search for cities and view current weather information. Users can add multiple cities as cards, and the cards remain until deleted.  

The project consists of a **backend** (Node.js + Express) and a **frontend** (HTML, CSS, JS). Weather data is fetched from [OpenWeatherMap API](https://openweathermap.org/api).  

## Features

- Search for cities and display current weather
- Display temperature in **Celsius and Fahrenheit**
- Show weather description (e.g., cloudy, rain, clear sky)
- Multiple city cards can be added
- Cards remain until manually deleted
- Error handling for invalid city names

---
###How it Works
When a user searches for a city, the backend performs the following steps:
  1. Convert city name to geographic coordinates. This is because the openweathermap API requires latitude and longitude.
     <br>
      http://api.openweathermap.org/geo/1.0/direct?q={CITY_NAME}&limit=1&appid={API_KEY}
     <br>
     The above API will return matching locations with latitude and logitude.
  <br>
  The backend will extract the first match to get the coordinates.

  3. Once we have lat and lon, we call OpenWeatherMap’s One Call API:
     <br>
    https://api.openweathermap.org/data/3.0/onecall?lat={LAT}&lon={LON}&exclude=minutely,hourly,alerts&units=metric&appid={API_KEY}
<br>

  This returns current weather, daily forecast, and more details.
  <br>
  <br>
  The backend will format to only include relevant information: current temperature and weather description.
  <br>
  <br>
  3. Frontend will create a new card dynamically using Javascript. 


## Getting Started

### Prerequisites

- Node.js and npm installed: [https://nodejs.org](https://nodejs.org)  
- OpenWeatherMap API key: [https://openweathermap.org/api](https://openweathermap.org/api)

---

### Backend Setup

1. Navigate to the backend folder:
  cd backend
  npm install

2. Create a .env file with your OpenWeatherMap API key:
   API_KEY=your_api_key_here
   
4. Start the Server
  node index.js
  The server will run on http://localhost:3000 by default

### Frontend Setup

1. cd frontend
2. Open index.html in your browser


### How to Use

To add a city: 
  1. Enter a city name in the search box
  2. Press Search

To delete a city:
  1. Press x button on a card to delete it

###API Endpoints 


<img width="783" height="573" alt="Screenshot 2026-01-27 at 7 03 14 PM" src="https://github.com/user-attachments/assets/bbc57547-6225-4344-96ec-2ad6775e8121" />
