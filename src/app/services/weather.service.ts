import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WetherData } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getweather( cityname:string):Observable<WetherData>
  {
    return this.http.get<WetherData>(environment.baseurl ,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHost ,environment.XRapidAPIHostvalue)
      .set(environment.XRapidAPIKey , environment.XRapidAPIKeyvalue),
      params:new HttpParams()
      .set('q' ,cityname)
      .set('units' ,'matric')
      .set('mode' ,'json')
    })
  }
}
