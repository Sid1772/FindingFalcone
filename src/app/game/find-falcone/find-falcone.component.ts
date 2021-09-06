import { Component, OnInit, Output } from '@angular/core';
import { GameService } from '../../game.service';
import { Vehicles } from './vehicle-type';
import { Planets } from './planet-type';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.css'],
})
export class FindFalconeComponent implements OnInit {
  constructor(
    private service: GameService,
    private dataService: DataService,
    private router: Router
  ) {}
  planetsToVisit = 4;//No of planets to visit
  planets!: Array<Planets>;//Array of planets available
  vehicles!: Array<Vehicles>;//Array of vehicles available
  selectedDestinations = new Array<Planets>(this.planetsToVisit);
  selectedVehicles = new Array<Vehicles>(this.planetsToVisit);
  currentSelection = 0;
  errorMessage = '';
  distanceBigMessage =
    'Sorry this ship cant travel this much distance! Try some other Ship';
  totalTime = 0;
  timeTaken = new Array(this.planetsToVisit);
  showSpin = false;
  /**
   * Gets and Sets data via Api to Arrays
   */
  ngOnInit(): void {
    this.service.getPlanets().subscribe(
      (planet: any) => {
        this.planets = planet;
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
    this.service.getVehicles().subscribe(
      (vehicle: any) => {
        this.vehicles = vehicle;
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }
  /**
   * Find Distance and time Taken to selected planet via selected vehicle
   * @param index 
   * @returns 
   */
  findDistance(index: number) {
    this.errorMessage = '';
    const vehicle = this.selectedVehicles[this.currentSelection];
    const distance = this.selectedDestinations[this.currentSelection].distance;
    const max_distance = vehicle.max_distance;
    const speed = vehicle.speed;
    if (max_distance < distance) {
      const v = new Array<Vehicles>(this.planetsToVisit);
      this.selectedVehicles[this.currentSelection] = v[this.currentSelection];
      this.errorMessage = this.distanceBigMessage;
      return;
    } else {
      this.timeTaken[this.currentSelection] = distance / speed;
      this.totalTime = this.findTotalTime();
    }
  }
  /**
   * Called from Html component to find number of certain ships left 
   * @param ship 
   * @param index 
   * @returns 
   */
  shipsLeft(ship: Vehicles, index: number) {
    return (
      this.vehicles[index].total_no -
      this.selectedVehicles.filter((v) => v === ship).length
    );
  }
  /**
   * Called from Html to check whether to enable  or disable "Next Destination" button 
   * @returns 
   */
  check() {
    if (this.currentSelection + 1 >= this.planetsToVisit) return true;
    if (
      !this.selectedDestinations[this.currentSelection] ||
      !this.selectedVehicles[this.currentSelection]
    )
      return true;
    return false;
  }
  /**
   * Find and Return total time taken by all ships in together to visit all selected planets
   * @returns Sum :Number
   */
  findTotalTime() {
    var sum = 0;
    for (let i = 0; i < this.timeTaken.length; i++) {
      const element = this.timeTaken[i];
      sum += element;
    }
    return sum;
  }
  /**
   * Reset the Game
   */
  reset() {
    this.currentSelection = 0;
    this.selectedDestinations = new Array<Planets>(this.planetsToVisit);
    this.selectedVehicles = new Array<Vehicles>(this.planetsToVisit);
    this.timeTaken = [];
    this.totalTime = 0;
  }
  /**
   * Get Token and route to results page to show the result
   */
  findFalcone() {
    this.showSpin = true;
    this.service.getToken().subscribe(
      (res: any) => {
        const data = {
          token: res.token,
          planets: this.selectedDestinations,
          vehicles: this.selectedVehicles,
          timeTaken: this.totalTime,
        };
        this.dataService.sendData(data);
        this.router.navigate(['/result']);
      },
      (err) => {
        this.errorMessage = err.message;
        this.showSpin = false;
      }
    );
  }
}
