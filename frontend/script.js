try {
  const res = await fetch(`http://localhost:3000/weather?city=${encodeURIComponent(city)}`);
  const data = await res.json();

  if (!res.ok) {
    // Backend returned an error (404 or 400)
    return alert(data.error);
  }

  // Create card as before
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <button class="delete-btn">&times;</button>
    <h2>${data.city}, ${data.country}</h2>
    <p><strong>Temperature:</strong> ${data.temperature.celsius}°C / ${data.temperature.fahrenheit}°F</p>
    <p><strong>Weather:</strong> ${data.weather}</p>
  `;

  card.querySelector('.delete-btn').addEventListener('click', () => {
    card.remove();
  });

  cardsContainer.appendChild(card);
  cityInput.value = '';

} catch (err) {
  alert('Failed to fetch weather. Please try again.');
}
