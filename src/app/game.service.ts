import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders,} from '@angular/common/http'
import { AppConfig } from './app.config';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  constructor(private http:HttpClient,private config:AppConfig) { }
  serviceUrl="https://findfalcone.herokuapp.com"

private handleError(error:HttpErrorResponse){
  
  return throwError({error:error.status,message:"Something seems wrong! Please try again or try refreshing the page"})
}
  getVehicles(){
    return this.http.get(this.serviceUrl+this.config.GetVehicles).pipe(catchError(this.handleError))
  }
  getPlanets(){
    return this.http.get(this.serviceUrl+this.config.GetPlanets).pipe(catchError(this.handleError))
  }
  getToken(){
    let header = new HttpHeaders({'Accept':'application/json'})
    return this.http.post(this.serviceUrl+this.config.GetToken,{},{headers:header}).pipe(catchError(this.handleError))
  }
  findFalcone(data:any){
    let header = new HttpHeaders({'Accept':'application/json'})
    return this.http.post(this.serviceUrl+this.config.FindFalcone,data,{headers:header}).pipe(catchError(this.handleError))
  }

}
