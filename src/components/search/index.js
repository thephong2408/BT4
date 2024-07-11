// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Search() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [value, setValue] = useState("hanoi");
//   const currentDate = new Date();
//   const day = currentDate.getDate();

//   const handleChange = (e) => {
//     const city = e.target.value;
//     if (city.trim() !== "") {
//       setTimeout(() => {
//         setValue(city);
//       }, 1000);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.weatherapi.com/v1/forecast.json?key=f5ac4be4a19c47d8a3e42522222112&q=${value}&days=${day}&aqi=no&alerts=yes`
//         );
//         setWeatherData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [value]);
//   console.log(weatherData);
//   return (
//     <div className="flex items-center">
//       <span className="text-[14px]  mr-2">Your city</span>
//       <div className="w-[120px] pl-3 py-1 bg-white border-[1px] rounded-md">
//         <input className="w-full" onChange={handleChange} type="text" />
//       </div>
//     </div>
//   );
// }

// export default Search;
