<a href="https://mithun-gowda.github.io/Weather_Monitor/">Click here</a> to view project
# Weather App

## Features

- **Dynamic Display**: The application dynamically presents weather information, including temperature, conditions, wind speed, and humidity.
- **Flexibility**: Users can input a city for quick results.
- **Error Handling**: In case of invalid input or an issue with the API, the application gracefully handles errors and provides a user-friendly message.

## Usage

1. **Open the Application**: Open the application in your preferred web browser.
2. **Input City**: Enter the desired city in the provided field.
3. **Fetch Weather**: Click the "Search" button to fetch and display real-time weather information.
4. **Explore Data**: Explore the presented data, including temperature, conditions, wind speed, and humidity.

## API Key

This application uses the WeatherAPI. Ensure you have a valid API key and replace it in the fetch URL in the `weather` function in `script.js`.

```javascript
const APIKey = 'YOUR_API_KEY';
fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`)
    .then(response => response.json())
    .then(weatherData => {
        // Rest of the code
    });
```



## Acknowledgments

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/).
