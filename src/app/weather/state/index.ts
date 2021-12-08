
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WeatherState } from "./weather.reducer";
import * as Appstate from "src/app/state/app.state";

export interface State extends Appstate.State {
    weather: WeatherState;
};

const getWeatherFeatureState = createFeatureSelector<WeatherState>('weather');

export const getDisplayInCelsius = createSelector(
    getWeatherFeatureState,
    state => state.displayInCelsius
);

export const getCurrentCountry = createSelector(
    getWeatherFeatureState,
    state => state.currentCity
);

export const getWeatherData = createSelector(
    getWeatherFeatureState,
    state => state.weatherData
);

export const getError = createSelector(
    getWeatherFeatureState,
    state => state.error
);