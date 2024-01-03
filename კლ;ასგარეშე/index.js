async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const weatherInfo = document.getElementById('weatherInfo');
      if (data.cod === '404') {
        weatherInfo.textContent = 'City not found';
      } else {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
  
        weatherInfo.innerHTML = `<h2>${cityName}</h2>
                                 <p>Temperature: ${temperature}°C</p>
                                 <p>Description: ${weatherDescription}</p>`;
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }
  