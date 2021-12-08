import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fahrenheitToCelsius } from 'src/app/common/functions/fehrenheitsToCelsius';
import { CustomWeather } from 'src/app/common/interfaces/weather.interface';
import { getCurrentCountry, getDisplayInCelsius, getWeatherData, State } from '../state';
import { WeatherApiActions, WeatherPageActions } from '../state/actions';
import { getWeather } from '../state/actions/weather-page.actions';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  // public weatherData: CustomWeather;
  // public displayCelsius = false;
  public displayCelsius$: Observable<boolean>;
  public weatherData$: Observable<CustomWeather>;
  public city = "Cairo";

  public weatherFormGroup = new FormGroup({
    city: new FormControl(),
  });

  constructor(
    private weatherService: WeatherService,
    private store: Store<State>) { }

  ngOnInit(): void {
    this.displayCelsius$ = this.store.select(getDisplayInCelsius);
    this.weatherData$ = this.store.select(getWeatherData);
  }

  onFormSubmit() {
    // this.getWeatherData(this.weatherFormGroup.value.city);
    this.city = this.weatherFormGroup.value.city;
    this.store.dispatch(WeatherPageActions.getWeather({ city: this.city }))
  }

  // getWeatherData(city: string) {
  //   this.weatherService.getWeatherForCity(city).subscribe(
  //     data => {
  //       const temp: CustomWeather = {
  //         city: city,
  //         icon: data.weather[0].icon,
  //         temp_f: data.main.temp,
  //         temp_c: fahrenheitToCelsius(data.main.temp),

  //       }
  //       this.weatherData = temp;
  //     }
  //   )
  // }

  checkChanged() {
    // this.displayCelsius = !this.displayCelsius;
    this.store.dispatch(WeatherPageActions.toggleDisplayInCelsius())
  }

}
