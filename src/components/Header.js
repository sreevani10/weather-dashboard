import { useEffect, useState } from "react";
import "../styles/Header.css";
import { BsSunFill } from "react-icons/bs";


const Header = () => {
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
        <BsSunFill className="icon"/>
        <h4 className="temp">
          13<sup>o</sup>
        </h4>
        <h5 className="loc">Bengaluru,Karnataka</h5>
      </div>
      <div className="dateTime">
        <p className="time">{date.toLocaleTimeString()} </p>
        <p className="date">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Header;
