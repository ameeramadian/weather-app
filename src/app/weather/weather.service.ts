import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Weather } from "../common/interfaces/weather.interface";

@Injectable()
export class WeatherService {
    private base = 'https://api.openweathermap.org/data/2.5/weather';

    constructor(
        private http: HttpClient,
    ) { };

    getWeatherForCity(city: string): Observable<Weather> {
        const params = new HttpParams().set('q', city).set('appid', '4f52e723ef3676a248e7143fd25c5a84');
        return this.http.get<Weather>(this.base, { params: params })
    }
}