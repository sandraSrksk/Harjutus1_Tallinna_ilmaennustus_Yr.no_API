const axios = require('axios');
const moment = require('moment');

// Yr.no API URL with Tallinn coordinates
const apiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.4370&lon=24.7536';

axios.get(apiUrl, {
    headers: {
        'User-Agent': 'YourAppName/1.0 (your@email.com)' // Replace with your app's name and email
    }
})
.then(response => {
    const forecasts = response.data.properties.timeseries;

    forecasts.forEach(forecast => {
        const time = forecast.time;
        const temperature = forecast.data.instant.details.air_temperature;
        const formattedTime = moment(time).format('YYYY-MM-DDTHH:mm:ss');
        console.log(`${formattedTime} ${temperature}°C`);
    });
})
.catch(error => {
    console.error('Error fetching weather data:', error.message);
});