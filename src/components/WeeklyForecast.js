import Forecast from "./Forecast";
import { GoSun } from "react-icons/go";
import { MdAir } from "react-icons/md";
import { CiCloud } from "react-icons/ci";
import { CiCloudDrizzle } from "react-icons/ci";
import { PiCloudLightningBold } from "react-icons/pi";
import "../styles/Forecast.css";

const WeeklyForecast = ({ dates, dayTemp }) => {
  
  return (
    <div className="forecast">
      <Forecast
        title={dates ? dates[0] : "Mon"}
        season={<GoSun />}
        temperature={dayTemp ? dayTemp[0] : ""}
      />
      <Forecast
        title={dates ? dates[1] : "Tue"}
        season={<MdAir />}
        temperature={dayTemp ? dayTemp[1] : ""}
      />
      <Forecast
        title={dates ? dates[2] : "Wed"}
        season={<CiCloud />}
        temperature={dayTemp ? dayTemp[2] : ""}
      />
      <Forecast
        title={dates ? dates[3] : "Thu"}
        season={<PiCloudLightningBold />}
        temperature={dayTemp ? dayTemp[3] : ""}
      />
      <Forecast
        title={dates ? dates[4] : "Fri"}
        season={<CiCloudDrizzle />}
        temperature={dayTemp ? dayTemp[4] : ""}
      />
      <Forecast
        title={dates ? dates[5] : "Sat"}
        season={<CiCloud />}
        temperature={dayTemp ? dayTemp[6] : ""}
      />
      <Forecast
        title={dates ? dates[6] : "Sun"}
        season={<GoSun />}
        temperature={dayTemp ? dayTemp[7] : ""}
      />
    </div>
  );
};

export default WeeklyForecast;
