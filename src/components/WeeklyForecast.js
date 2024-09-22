import Forecast from "./Forecast";
import "../styles/Forecast.css";
import { format } from "date-fns";

const WeeklyForecast = ({ dates, dayTemp, season }) => {
  return (
    <div>
      <p className="names">Weekly Forecast</p>
    <div className="forecast">
      
      {dates?.map((item, index) => (
        <Forecast
          key={index}
          title={item ? format(new Date(item), "EEE") : "N/A"}
          season={season[index]}
          temperature={dayTemp ? dayTemp[index] : "N/A"}
        />
      ))}
    </div>
    </div>
  );
};

export default WeeklyForecast;
