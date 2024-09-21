import ReportCards from "./ReportCards"
import { WiHumidity } from "react-icons/wi";
import { FiSunset } from "react-icons/fi";
import { TbUvIndex } from "react-icons/tb";
import { FiSunrise } from "react-icons/fi";
import '../styles/WeatherReport.css'

const WeatherReport = ({humidity,sunset,uvindex,sunrise}) =>{
    return(
        <div className="report" >
            <div className="layout">
                <ReportCards icon={<WiHumidity/>} name="Humidity" value={humidity}/>
                <ReportCards icon={<FiSunset />} name="Sunset" value={sunset}/>
            </div>
            <div className="layout">
                <ReportCards icon={<TbUvIndex />} name="UV Index" value={uvindex}/>
                <ReportCards icon={<FiSunrise />} name="Sunrise" value={sunrise}/>
            </div>
            
        </div>
    )
}

export default WeatherReport