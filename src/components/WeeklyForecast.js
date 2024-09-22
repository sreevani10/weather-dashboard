import Forecast from "./Forecast";
import { format } from "date-fns";
import "../styles/Forecast.css";

const WeeklyForecast = ({ dates, dayTemp, dayPrecp, season, condition }) => {
  return (
    <div>
      <p className="heading">Weekly Forecast</p>
      <div className="forecast">
        {dates?.map((item, index) => (
          <Forecast
            key={index}
            title={item ? format(new Date(item), "EEE") : "N/A"}
            season={season[index]}
            temperature={dayTemp[index] }
            precipitation = {dayPrecp[index]}
            condition={condition}
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
