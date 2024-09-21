import { useEffect, useState } from "react";
import "../styles/Header.css";
import { BsSunFill } from "react-icons/bs";

const Header = ({ temperature, address }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="card">
      <div className="location">
        <BsSunFill className="header-temp-icon" />
        <span className="temp">
          {temperature}
          <sup>o</sup>
        </span>
        <span className="loc">{address}</span>
      </div>
      <div className="dateTime">
        <p className="time">{date.toLocaleTimeString()} </p>
        <p className="date">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Header;
