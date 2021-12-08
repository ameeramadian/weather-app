import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home/home-screen/home-screen.component';
import { WeatherComponent } from './weather/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
