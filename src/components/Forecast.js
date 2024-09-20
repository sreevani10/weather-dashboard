import DayForecast from "./DayForecast"
import { GoSun } from "react-icons/go";
import { MdAir } from "react-icons/md";
import { CiCloud } from "react-icons/ci";
import { CiCloudDrizzle } from "react-icons/ci";
import { PiCloudLightningBold } from "react-icons/pi";
import '../styles/Forecast.css'

const Forecast = () =>{
    return(
        <div className="forecast">
            <DayForecast day={"MON"} season={<GoSun/>}  temperature={10}/>
            <DayForecast day={"TUE"} season={<MdAir />} temperature={10} />
            <DayForecast day={"WED"} season={<CiCloud />} temperature={10}/>
            <DayForecast day={"THU"} season={<PiCloudLightningBold />} temperature={10}/>
            <DayForecast day={"FRI"} season={<CiCloudDrizzle />} temperature={10}/>
            <DayForecast day={"SAT"} season={<CiCloud />} temperature={10}/>
            <DayForecast day={"SUN"} season={<GoSun />} temperature={10}/>
          
        </div>
    )
}

export default Forecast