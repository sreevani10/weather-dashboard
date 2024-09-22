import WeeklyForecast from "./components/WeeklyForecast";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RainfallReport from "./components/RainfallReport";
import WeatherReport from "./components/WeatherReport";
import HourlyForecast from "./components/HourlyForecast";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({
    latitude: 12.9719,
    longitude: 77.5937,
  });
  const [address, setAddress] = useState("Bengaluru, Karnataka, India");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { accept: "application/json" },
    };

    let url = `https://api.open-meteo.com/v1/forecast?latitude=${location?.latitude}&longitude=${location?.longitude}&current=temperature_2m,relative_humidity_2m,weather_code&daily=temperature_2m_max,sunrise,sunset,uv_index_max,weather_code&timezone=auto&forecast_days=7`;
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [location]);

  return (
    <div className="app">
      <Navbar setLocation={setLocation} setAddress={setAddress} />
      <Header
        temperature={weatherData?.current.temperature_2m}
        address={address}
      />
      <div className="main-section">
        <div className="left-side">
          <WeatherReport
            humidity={weatherData?.current.relative_humidity_2m}
            sunset={
              weatherData?.daily.sunset[0]
                ? format(new Date(weatherData.daily.sunset[0]), "kk:mm a")
                : "N/A"
            }
            uvindex={weatherData?.daily.uv_index_max[0]}
            sunrise={
              weatherData?.daily.sunrise[0]
                ? format(new Date(weatherData.daily.sunrise[0]), "kk:mm a")
                : "N/A"
            }
          />
          <RainfallReport />
        </div>
        <div className="right-side">
          <WeeklyForecast
            dates={weatherData?.daily.time}
            dayTemp={weatherData?.daily.temperature_2m_max}
            season={weatherData?.daily.weather_code}
          />
          <HourlyForecast location={location} />
        </div>
      </div>
    </div>
  );
}

export default App;
