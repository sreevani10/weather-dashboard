const Forecast = ({ title, season, temperature }) => {
  return (
    <div className="forecast-report">
      <span>{title}</span>
      <span className="season">{season}</span>
      <span>
        {temperature}
        <sup>o</sup>
      </span>
    </div>
  );
};

export default Forecast;
