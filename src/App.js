import Search from "./Search";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Intro from "./Intro";
import Footer from "./Footer";


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {   
    console.log('searchData: ' + searchData);
    const [lat, lon] = searchData.value.split(" ");
    
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
          const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forcastResponse = await response[1].json();

          setCurrentWeather({ city: searchData.label, ...weatherResponse });
          setForecast({ city: searchData.label, ...forcastResponse });
        })
        .catch(console.log);
    };

    console.log(currentWeather);
    console.log(forecast);
  
    return (
    <div className="App">
        <Intro />
        <Search onSearchChange={handleOnSearchChange} />      
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />} 
        <Footer />
    </div>
  );
  
  
}

export default App;



  
