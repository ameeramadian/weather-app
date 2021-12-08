import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './state/weather.reducer';
import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './state/weather.effects';


@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('weather', weatherReducer),
    EffectsModule.forFeature([WeatherEffects])
  ],
  providers: [WeatherService],
})
export class WeatherModule { }
