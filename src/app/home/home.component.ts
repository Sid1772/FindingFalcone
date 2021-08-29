import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imagePath = '../../assets/images/findfalcone.PNG';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  startGame() {
    this.router.navigate(['/game']);
  }
}
