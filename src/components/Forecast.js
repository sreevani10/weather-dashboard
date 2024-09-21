const Forecast = ({ title, season, temperature }) => {
  return (
    <div className="forecast-report">
      <p>{title}</p>
      <p className="season">{season}</p>
      <p>
        {temperature}
        <sup>o</sup>
      </p>
    </div>
  );
};

export default Forecast;
