import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GameService } from '../game.service';
import { Data } from './data-type';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  data!: Data;
  status!: boolean;
  planetName: any;
  timeTaken: any;
  showSpin = true;
  searchData:any
  retryCount=0
  errorMessage=""
  constructor(
    private dataService: DataService,
    private service: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.data.subscribe((result: any) => {
      this.data = result;
      if (this.data) {
        this.setData()
      } else {
        this.router.navigate(['/home']);
      }
    });
  }
  setData(){
    const planets = this.data.planets.map((x: any) => x.name);
    const vehicles = this.data.vehicles.map((v: any) => v.name);
    const searchData = {
      token: this.data.token,
      planet_names: planets,
      vehicle_names: vehicles,
    };
    this.timeTaken = this.data.timeTaken;
    this.searchData=searchData
    this.findFalcone()
  }
  findFalcone() {
   
    this.service.findFalcone(this.searchData).subscribe((result: any) => {
      this.status = result.status;
      this.showSpin = false;
      if (this.status) this.planetName = result.planet_name;
    },err=>{
      if(err.status==400){
        this.retryCount+=1
        if(this.retryCount<=2)this.generateNewToken();
        else this.errorMessage=err.message  
      }
      else{
        this.errorMessage=err.message
      }
    });
  }
  reset() {
    this.router.navigate(['/game']);
  }
  generateNewToken(){
    this.service.getToken().subscribe((token:any)=>{
      this.searchData.token=token.token
      this.findFalcone()
    })
  }
}
