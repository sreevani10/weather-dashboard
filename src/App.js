import "./App.css";
import WeeklyForecast from "./components/WeeklyForecast";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RainfallReport from "./components/RainfallReport";
import WeatherReport from "./components/WeatherReport";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className="main-section">
        <div className="left-side">
          <WeatherReport />
          <RainfallReport />
        </div>
        <div className="right-side">
          <WeeklyForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
