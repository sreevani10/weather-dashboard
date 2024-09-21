import Forecast from "./Forecast";
import { GoSun } from "react-icons/go";
import { MdAir } from "react-icons/md";
import { CiCloud } from "react-icons/ci";
import { CiCloudDrizzle } from "react-icons/ci";
import { PiCloudLightningBold } from "react-icons/pi";
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
        setHourlyForecastData(data);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.error(err);
      });
  }, [location]);

  return (
    <div className="hourlyforecast">
      {hourlyForecastData?.hourly.time.map((item, index) => (
        <Forecast
          title={item ? format(new Date(item), "kk:mm") : "N/A"}
          season={<GoSun />}
          temperature={hourlyForecastData.hourly.temperature[index]}
        />
      ))}
    </div>
  );
};

export default HourlyForecast;
