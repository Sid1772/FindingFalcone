import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output() click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  reset() {
    this.click.emit('reset');
  }
}
