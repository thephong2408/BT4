// // src/features/weather/weatherSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   weatherData: null,
//   status: "idle",
//   error: null,
// };

// export const fetchWeather = createAsyncThunk(
//   "weather/fetchWeather",
//   async (cityName) => {
//     try {
//       const response = await axios.get(
//         `https://api.weatherapi.com/v1/forecast.json?key=f5ac4be4a19c47d8a3e42522222112&q=${cityName}&days=10&aqi=no&alerts=yes`
//       );
//       return response.data;
//     } catch (error) {
//       throw Error(error.response.data.error.message); // Re-throwing error with custom message
//     }
//   }
// );

// const weatherSlice = createSlice({
//   name: "weather",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchWeather.pending]: (state, action) => {
//       state.status = "loading";
//     },
//     [fetchWeather.fulfilled]: (state, action) => {
//       state.status = "succeeded";
//       state.weatherData = action.payload;
//       state.error = null;
//     },
//     [fetchWeather.rejected]: (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     },
//   },
// });

// export default weatherSlice.reducer;
// export const selectWeatherData = (state) => state.weather.weatherData;
// export const selectWeatherStatus = (state) => state.weather.status;
// export const selectWeatherError = (state) => state.weather.error;
