import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchCurrentWeatherStart = () => {
  return {
    type: actionTypes.FETCH_CURRENT_WEATHER_START,
    error: null,
  };
};

export const fetchCurrentWeatherSuccess = (currentWeatherData, location) => {
  return {
    type: actionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
    currentWeather: currentWeatherData,
    location: location,
  };
};

export const fetchCurrentWeatherFailed = (error, location) => {
  return {
    type: actionTypes.FETCH_CURRENT_WEATHER_FAILED,
    error: error,
    location: location,
  };
};

export const fetchCurrentWeather = (location, conversion) => {
  return (dispatch) => {
    dispatch(fetchCurrentWeatherStart());
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${conversion}&appid=8583135f95e725367f6ffea8d5ad8746`
      )
      .then((res) => {
        dispatch(fetchCurrentWeatherSuccess(res.data, location));
      })
      .catch((error) => {
        dispatch(fetchCurrentWeatherFailed(error, location));
      });
  };
};

export const fetchWeeklyWeatherStart = () => {
  return {
    type: actionTypes.FETCH_WEEKLY_WEATHER_START,
    error: null,
  };
};

export const fetchWeeklyWeatherSuccess = (weeklyWeatherData, location) => {
  return {
    type: actionTypes.FETCH_WEEKLY_WEATHER_SUCCESS,
    weeklyWeather: weeklyWeatherData,
    location: location,
  };
};

export const fetchWeeklyWeatherFailed = (error, location) => {
  return {
    type: actionTypes.FETCH_WEEKLY_WEATHER_FAILED,
    error: error,
    location: location,
  };
};

export const fetchWeeklyWeather = (coordinates, conversion) => {
  return (dispatch) => {
    dispatch(fetchWeeklyWeatherStart());
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely&units=${conversion}&appid=8583135f95e725367f6ffea8d5ad8746`
      )
      .then((res) => {
        dispatch(fetchWeeklyWeatherSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchWeeklyWeatherFailed(error));
      });
  };
};
