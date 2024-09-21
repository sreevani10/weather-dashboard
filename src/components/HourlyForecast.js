import Forecast from "./Forecast";
import { GoSun } from "react-icons/go";
import { MdAir } from "react-icons/md";
import { CiCloud } from "react-icons/ci";
import { CiCloudDrizzle } from "react-icons/ci";
import { PiCloudLightningBold } from "react-icons/pi";
import "../styles/Forecast.css";
import { useEffect, useState } from "react";

const HourlyForecast = () => {
  const [hourlyForecastData, setHourlyForecastData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=12.9719&longitude=77.5937&hourly=temperature&timezone=Asia%2FTokyo&forecast_days=1",
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
  }, []);

  return (
    <div className="forecast">
      {hourlyForecastData?.hourly.time.map((item, index) => (
        <Forecast
          title={item}
          season={<GoSun />}
          temperature={hourlyForecastData.hourly.temperature[index]}
        />
      ))}
    </div>
  );
};

export default HourlyForecast;
