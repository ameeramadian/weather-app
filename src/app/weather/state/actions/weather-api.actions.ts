import { createAction, props } from "@ngrx/store";
import { CustomWeather } from "src/app/common/interfaces/weather.interface";

export const getWeatherSuccess = createAction(
    '[Weather API] Get Weather Success',
    props<{ weather: CustomWeather }>()
);

export const getWeatherFailure = createAction(
    '[Weather API] Get Weather Failure',
    props<{ error: string }>()
);