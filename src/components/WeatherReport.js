import ReportCards from "./ReportCards"
import { WiHumidity } from "react-icons/wi";
import { FiSunset } from "react-icons/fi";
import { TbUvIndex } from "react-icons/tb";
import { FiSunrise } from "react-icons/fi";
import '../styles/WeatherReport.css'

const WeatherReport = () =>{
    return(
        <div className="report" >
            <div className="layout">
                <ReportCards icon={<WiHumidity/>} name="Humidity" value="40"/>
                <ReportCards icon={<FiSunset />} name="Sunset" value="7.50 pm"/>
            </div>
            <div className="layout">
                <ReportCards icon={<TbUvIndex />} name="UV Index" value="o of 10"/>
                <ReportCards icon={<FiSunrise />} name="Sunrise" value="6.35 pm"/>
            </div>
            
        </div>
    )
}

export default WeatherReport