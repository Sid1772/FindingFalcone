import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  constructor(private http:HttpClient,private config:AppConfig) { }
  serviceUrl="https://findfalcone.herokuapp.com"


  getVehicles(){
    return this.http.get(this.serviceUrl+this.config.GetVehicles)
  }
  getPlanets(){
    return this.http.get(this.serviceUrl+this.config.GetPlanets)
  }
  getToken(){
    let header = new HttpHeaders({'Accept':'application/json'})
    return this.http.post(this.serviceUrl+this.config.GetToken,{},{headers:header})
  }
  findFalcone(data:any){
    let header = new HttpHeaders({'Accept':'application/json'})
    return this.http.post(this.serviceUrl+this.config.FindFalcone,data,{headers:header})
  }
}
