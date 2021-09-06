import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  url = 'https://www.geektrust.in/coding-problem/frontend/space';
  constructor() {}

  ngOnInit(): void {}
}
