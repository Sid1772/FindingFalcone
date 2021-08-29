import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data=new BehaviorSubject(null)
  constructor() { }
  sendData(data:any){
  this.data.next(data)
  console.log(data)
  }
}
