import Forecast from "./Forecast";
import "../styles/Forecast.css";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const HourlyForecast = ({ location }) => {
  const [hourlyForecastData, setHourlyForecastData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location?.latitude}&longitude=${location?.longitude}&hourly=temperature,weather_code&timezone=auto&forecast_days=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHourlyForecastData(data);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.error(err);
      });
  }, [location]);

  return (
    <div>
      <p className="names">Hourly Forecast</p>
    
    <div className="hourlyforecast">
      {hourlyForecastData?.hourly.time.map((item, index, season) => (
        <Forecast
          title={item ? format(new Date(item), "kk:mm") : "N/A"}
          season={hourlyForecastData.hourly.weather_code[index]}
          temperature={hourlyForecastData.hourly.temperature[index]}
        />
      ))}
    </div>
    </div>
  );
};

export default HourlyForecast;
