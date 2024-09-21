import Forecast from "./Forecast";
import { GoSun } from "react-icons/go";
import { MdAir } from "react-icons/md";
import { CiCloud } from "react-icons/ci";
import { CiCloudDrizzle } from "react-icons/ci";
import { PiCloudLightningBold } from "react-icons/pi";
import "../styles/Forecast.css";

const WeeklyForecast = () => {
  return (
    <div className="forecast">
      <Forecast title={"MON"} season={<GoSun />} temperature={10} />
      <Forecast title={"TUE"} season={<MdAir />} temperature={10} />
      <Forecast title={"WED"} season={<CiCloud />} temperature={10} />
      <Forecast
        title={"THU"}
        season={<PiCloudLightningBold />}
        temperature={10}
      />
      <Forecast title={"FRI"} season={<CiCloudDrizzle />} temperature={10} />
      <Forecast title={"SAT"} season={<CiCloud />} temperature={10} />
      <Forecast title={"SUN"} season={<GoSun />} temperature={10} />
    </div>
  );
};

export default WeeklyForecast;
