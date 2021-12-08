import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WeatherApiActions, WeatherPageActions } from "./actions";
import { WeatherService } from "../weather.service";
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { of } from "rxjs";
import { CustomWeather } from "src/app/common/interfaces/weather.interface";
import { fahrenheitToCelsius } from "src/app/common/functions/fehrenheitsToCelsius";
@Injectable()
export class WeatherEffects {
    constructor(
        private actions$: Actions,
        private weatherService: WeatherService,
    ) { }

    getWeather$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(WeatherPageActions.getWeather),
                mergeMap(action => this.weatherService.getWeatherForCity(action.city)
                    .pipe(
                        map(weatherData => {
                            const customWeather: CustomWeather = {
                                icon: weatherData.weather[0].icon,
                                temp_f: weatherData.main.temp,
                                temp_c: fahrenheitToCelsius(weatherData.main.temp),
                            }
                            return WeatherApiActions.getWeatherSuccess({ weather: customWeather })
                        }),
                        catchError(error => of(WeatherApiActions.getWeatherFailure({ error })))
                    ))
            );
    });
}
