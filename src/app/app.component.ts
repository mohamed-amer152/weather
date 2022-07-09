import { Component, OnInit } from '@angular/core';
import { WetherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private weatherservice:WeatherService){}
 weatherData?: WetherData ;
  ngOnInit(): void {
    this.getweather(this.cityname);
    this.cityname='';
  }

  cityname:string ='cairo' ;
  onsubmit()
  {
        this.getweather(this.cityname);
        this.cityname='';
  }


  private getweather (cityname:string)
  {
    this.weatherservice.getweather(cityname)
    .subscribe({
      next: (response)=>{
        this.weatherData = response;
      }
    })
  }

}
