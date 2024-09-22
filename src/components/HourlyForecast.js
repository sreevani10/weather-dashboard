import Forecast from "./Forecast";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import "../styles/Forecast.css";

const HourlyForecast = ({ location, condition }) => {
  const [hourlyForecastData, setHourlyForecastData] = useState(null);

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location?.latitude}&longitude=${location?.longitude}&hourly=precipitation_probability,temperature,weather_code&timezone=auto&forecast_days=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setHourlyForecastData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [location]);

  return (
    <div>
      <p className="heading">Hourly Forecast</p>

      <div className="hourly-forecast">
        {hourlyForecastData?.hourly.time.map((item, index) => (
          <Forecast
            key={index}
            title={item ? format(new Date(item), "kk:mm") : "N/A"}
            season={hourlyForecastData.hourly.weather_code[index]}
            temperature={hourlyForecastData.hourly.temperature[index]}
            precipitation={hourlyForecastData.hourly.precipitation_probability[index]}
            condition={condition}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
