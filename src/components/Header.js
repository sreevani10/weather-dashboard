import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import "../styles/Header.css";

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
      <div className="date-time">
        <p className="time">{date.toLocaleTimeString()} </p>
        <p className="date">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Header;
