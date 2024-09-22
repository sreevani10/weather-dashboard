import Forecast from "./Forecast";
import { format } from "date-fns";
import "../styles/Forecast.css";

const WeeklyForecast = ({ dates, dayTemp, season }) => {
  return (
    <div>
      <p className="heading">Weekly Forecast</p>
      <div className="forecast">
        {dates?.map((item, index) => (
          <Forecast
            key={index}
            title={item ? format(new Date(item), "EEE") : "N/A"}
            season={season[index]}
            temperature={dayTemp[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
