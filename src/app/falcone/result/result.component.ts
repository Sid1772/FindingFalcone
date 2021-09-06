import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { GameService } from '../../game.service';
import { Data } from './data-type';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  data!: Data;
  failure!:Boolean
  planetName: any;
  timeTaken: any;
  showSpin = true;
  searchData: any;
  retryCount = 0;
  errorMessage = '';
  constructor(
    private dataService: DataService,
    private service: GameService,
    private router: Router
  ) {
    this.dataService.data.subscribe((result: any) => {
      this.data = result;
      if (this.data) {
        this.setData();
      } else {
        this.router.navigate(['/home']);
      }
    });
  
  }
  /**
   * Subscribe to Behavioral Subject in Data Service and receives input from Find-Falcone Component with Selected Planets,Vehicles,Token
   */
  ngOnInit(): void {
  }
  /**
   * Sets Data according to input json required for API
   */
  setData() {
    const planets = this.data.planets.map((x: any) => x.name);
    const vehicles = this.data.vehicles.map((v: any) => v.name);
    const searchData = {
      token: this.data.token,
      planet_names: planets,
      vehicle_names: vehicles,
    };
    this.timeTaken = this.data.timeTaken;
    this.searchData = searchData;
    this.findFalcone();
  }
  /**
   * Calls API to get the result with required Data and if it fails retries it upto two times before returning error message
   */
  findFalcone() {
    this.service.findFalcone(this.searchData).subscribe(
      (result: any) => {
        this.showSpin = false;

        if (result.status=="success") {this.planetName = result.planet_name;
        this.failure=false}
        else{
          this.failure=true
        }
      },
      (err) => {
        if (err.status == 400) {
          this.retryCount += 1;
          if (this.retryCount <= 2) this.generateNewToken();
          else this.errorMessage = err.message;
        } else {
          this.errorMessage = err.message;
        }
      }
    );
  }
  /**
   * Resets the game and routes back to Find-Falcone-Component
   */
  reset() {
    this.router.navigate(['/game']);
  }
  /**
   * Called if Token expires or is invalid and generates new token to send to /find API
   */
  generateNewToken() {
    this.service.getToken().subscribe((token: any) => {
      this.searchData.token = token.token;
      this.findFalcone();
    });
  }
}
