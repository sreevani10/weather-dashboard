import { WeatherCodes } from "../utils/WeatherCodes";

const Forecast = ({ title, season, temperature }) => {
  const weatherIcon = WeatherCodes[season];

  return (
    <div className="forecast-report">
      <span>{title}</span>
      <span className="season">{weatherIcon}</span>
      <span className="value">
        {temperature}
        <sup>o</sup>
      </span>
    </div>
  );
};

export default Forecast;
