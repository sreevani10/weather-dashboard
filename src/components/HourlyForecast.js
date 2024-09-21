import Forecast from "./Forecast";
import { GoSun } from "react-icons/go";
import { MdAir } from "react-icons/md";
import { CiCloud } from "react-icons/ci";
import { CiCloudDrizzle } from "react-icons/ci";
import { PiCloudLightningBold } from "react-icons/pi";
import "../styles/Forecast.css";

const HourlyForecast = () => {
  return (
    <div className="forecast">
      <Forecast title={"01 am"} season={<GoSun />} temperature={10} />
      <Forecast title={"04 am"} season={<MdAir />} temperature={10} />
      <Forecast title={"07 am"} season={<CiCloud />} temperature={10} />
      <Forecast
        title={"01 pm"}
        season={<PiCloudLightningBold />}
        temperature={10}
      />
      <Forecast title={"04 pm"} season={<CiCloudDrizzle />} temperature={10} />
      <Forecast title={"07 pm"} season={<CiCloud />} temperature={10} />
      <Forecast title={"10 pm"} season={<GoSun />} temperature={10} />
    </div>
  );
};

export default HourlyForecast;
