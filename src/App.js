import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState("");

  const API_KEY = "0306f3e1767baa02731f4d5bb9b8cff4";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  //Fetch The weather Data in OpenweathermapAPI

  const fetchWeatherData = async () => {
    try {
      const { data } = await axios.get(API_URL, {
        params: { q: location, appid: API_KEY, units: "metric" },
      });

      setWeatherData(data);
    } catch (err) {
      console.error("Error to Fetching Weather data", err);
    }
  };

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  const handlecheck = (e) => {
    setLocation(e.target.value);
  };
  // To Reload the window
  const reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar reload={reload} location={location} handlecheck={handlecheck} />
      <Main weatherData={weatherData} />
    </div>
  );
}

export default App;
