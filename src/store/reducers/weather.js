import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    currentWeather: null,
    weeklyWeather: null,
    loading: false,
    error: null,
    locationSearch: null
}

const fetchCurrentWeatherStart = (state, action) => {
    return updateObject(initialState, { loading: true });
}

const fetchCurrentWeatherSuccess = (state, action) => {
    return updateObject(state, {
        currentWeather: action.currentWeather,
        locationSearch: action.location
    });
}

const fetchCurrentWeatherFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        locationSearch: action.location,
        currentWeather: null
    });
}

const fetchWeeklyWeatherStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const fetchWeeklyWeatherSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        weeklyWeather: action.weeklyWeather
    });
}

const fetchWeeklyWeatherFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        locationSearch: action.location,
        weeklyWeather: null
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CURRENT_WEATHER_START: return fetchCurrentWeatherStart(state, action);
        case actionTypes.FETCH_CURRENT_WEATHER_SUCCESS: return fetchCurrentWeatherSuccess(state, action);
        case actionTypes.FETCH_CURRENT_WEATHER_FAILED: return fetchCurrentWeatherFailed(state, action);
        case actionTypes.FETCH_WEEKLY_WEATHER_START: return fetchWeeklyWeatherStart(state, action);
        case actionTypes.FETCH_WEEKLY_WEATHER_SUCCESS: return fetchWeeklyWeatherSuccess(state, action);
        case actionTypes.FETCH_WEEKLY_WEATHER_FAILED: return fetchWeeklyWeatherFailed(state, action);
        default: return state;
    }
};

export default reducer;