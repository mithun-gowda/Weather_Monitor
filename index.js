const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

function weather() {
    const APIKey = '95435ac00eca4f8d88a162138230108';
    const cityInput = document.querySelector('.search-box input');
    const city = cityInput.value;

    if (city === '')
        return;

    fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`)
        .then(response => response.json())
        .then(weatherData => {

            if (weatherData.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            image.src = weatherData.current.condition.icon

            temperature.innerHTML = `${parseInt(weatherData.current.temp_c)}<span>°C</span>`;
            description.innerHTML = `${weatherData.current.condition.text}`;
            humidity.innerHTML = `${weatherData.current.humidity}%`;
            wind.innerHTML = `${parseInt(weatherData.current.wind_kph)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
        });
}


search.addEventListener('click', weather);
