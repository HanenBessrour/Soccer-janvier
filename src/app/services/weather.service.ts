import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherURL : string ="http://localhost:3000/api/weather"
  constructor(private httpClient : HttpClient) { }

  searchWeather(city:string){
return this.httpClient.get<{result :any}>(`${this.weatherURL}/${city}`);
  }
}
