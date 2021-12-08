import { createReducer, on } from "@ngrx/store";
import { CustomWeather } from "../../common/interfaces/weather.interface";
import { WeatherApiActions, WeatherPageActions } from "./actions";

export interface WeatherState {
    displayInCelsius: boolean;
    currentCity: string;
    weatherData: CustomWeather;
    error: string;
};

const initialState: WeatherState = {
    displayInCelsius: true,
    currentCity: "Cairo",
    weatherData: {
        icon: "",
        temp_f: 0,
        temp_c: 0,
    },
    error: 'string',
};

export const weatherReducer = createReducer<WeatherState>(
    initialState,
    on(
        WeatherPageActions.toggleDisplayInCelsius,
        (state): WeatherState => {
            return {
                ...state,
                displayInCelsius: !state.displayInCelsius
            };
        }),
    on(
        WeatherApiActions.getWeatherSuccess, (state, action): WeatherState => {
            return {
                ...state,
                weatherData: action.weather,
                error: ''
            };
        }),
    on(
        WeatherApiActions.getWeatherFailure, (state, action): WeatherState => {
            return {
                ...state,
                weatherData: initialState.weatherData,
                error: action.error,
            };
        }),
);

