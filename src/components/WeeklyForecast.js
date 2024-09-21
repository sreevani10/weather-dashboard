import Forecast from "./Forecast";
import { GoSun } from "react-icons/go";
import { MdAir } from "react-icons/md";
import { CiCloud } from "react-icons/ci";
import { CiCloudDrizzle } from "react-icons/ci";
import { PiCloudLightningBold } from "react-icons/pi";
import "../styles/Forecast.css";
import { format } from "date-fns";

const WeeklyForecast = ({ dates, dayTemp }) => {
  console.log(dates);
  return (
    <div className="forecast">
      {dates?.map((item, index) => (
        <Forecast
          key={index}
          title={item ? format(new Date(item), "EEE") : "N/A"}
          season={<GoSun />}
          temperature={dayTemp ? dayTemp[index] : "N/A"}
        />
      ))}
    </div>
  );
};

export default WeeklyForecast;
