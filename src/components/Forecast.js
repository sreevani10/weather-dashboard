import { WeatherCodes } from "../utils/WeatherCodes";

const Forecast = ({ title, season, temperature, condition, precipitation }) => {
  const weatherIcon = WeatherCodes[season];

  return (
    <div className="forecast-report">
      <span>{title}</span>
      <span className="season">{weatherIcon}</span>
      {condition === "temperature" ? (
        <span className="value">
          {temperature}
          <sup>o</sup>
        </span>
      ) : (
        <span className="value">{precipitation}%</span>
      )}
    </div>
  );
};

export default Forecast;
