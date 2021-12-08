import { createAction, props } from "@ngrx/store";

export const toggleDisplayInCelsius = createAction(
    '[Weather Page] Toggle Display in Celsius'
);

export const getWeather = createAction(
    '[Weather Page] Get Weather',
    props<{ city: string }>()
);