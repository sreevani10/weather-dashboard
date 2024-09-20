import "./App.css";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RainfallReport from "./components/RainfallReport";
import WeatherReport from "./components/WeatherReport";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <WeatherReport />
      <RainfallReport/>
      <Forecast />
    </div>
  );
}

export default App;
