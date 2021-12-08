import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { Weather } from "../common/interfaces/weather.interface";
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class WeatherService {
  private base = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(
    private http: HttpClient,
  ) { };

  getWeatherForCity(city: string): Observable<Weather> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', '4f52e723ef3676a248e7143fd25c5a84')
      .set('units', 'imperial');
    return this.http.get<Weather>(this.base, { params: params })
      .pipe(
        tap(),
        catchError(this.handleError)
      );
  };

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  };
}