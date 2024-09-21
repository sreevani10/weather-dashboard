import "./App.css";
import WeeklyForecast from "./components/WeeklyForecast";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RainfallReport from "./components/RainfallReport";
import WeatherReport from "./components/WeatherReport";
import HourlyForecast from "./components/HourlyForecast";
import { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const options = { method: "GET", headers: { accept: "application/json" } };

    // Fetching weather data
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=12.9719&longitude=77.5937&current=temperature_2m,relative_humidity_2m&daily=temperature_2m_max,sunrise,sunset,uv_index_max&timezone=Asia%2FTokyo&past_days=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {

        setWeatherData(data);
      })
      .catch((err) => {
        // Set the error to state if there is an error
        setError(err);
        console.error(err);
      });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Header temperature={weatherData?.current.temperature_2m} />
      <div className="main-section">
        <div className="left-side">
          <WeatherReport
            humidity={weatherData?.current.relative_humidity_2m}
            sunset={weatherData?.daily.sunset}
            uvindex={weatherData?.daily.uv_index_max}
            sunrise={weatherData?.daily.sunrise}
          />
          <RainfallReport />
        </div>
        <div className="right-side">
          <WeeklyForecast dates={weatherData?.daily.time} dayTemp={weatherData?.daily.temperature_2m_max} />
          <HourlyForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
