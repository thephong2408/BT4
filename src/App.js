import React, { useState, useEffect } from "react";

import axios from "axios";
import "./App.scss";
import Today from "./components/today";
import Days from "./components/days";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [value, setValue] = useState("hanoi");
  const currentDate = new Date();
  const day = currentDate.getDate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=f5ac4be4a19c47d8a3e42522222112&q=${value}&days=${day}&aqi=no&alerts=yes`
        );

        setWeatherData(response.data);
      } catch (error) {
        setWeatherData(null);
      }
    };

    fetchData();
  }, [value]);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      const city = e.target.value.trim();
      if (city !== "") {
        setValue(city);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="w-[900px] h-96 border-2  flex items-center">
        <div className="w-[250px] h-full flex flex-col items-center bg-[#fff] py-5 px-5">
          {/* search */}
          <div className="flex items-center">
            <span className="text-sm mr-2">Your city</span>
            <div className="w-32 pl-3 py-1 bg-white border-2 rounded-md">
              <input
                className="w-full"
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Enter city "
              />
            </div>
          </div>
          <Today weatherData={weatherData} />
        </div>
        <div className="flex-1 h-full">
          <div className="w-full h-full flex flex-col justify-between">
            <Days weatherData={weatherData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
