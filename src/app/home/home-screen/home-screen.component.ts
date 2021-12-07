import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather/weather.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(private ws: WeatherService) { }

  ngOnInit(): void {
    this.ws.getWeatherForCity('London').subscribe(
      w => console.log(w)
    )
  }

}
