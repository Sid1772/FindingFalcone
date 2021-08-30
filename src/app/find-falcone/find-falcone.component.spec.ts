import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfig } from '../app.config';

import { FindFalconeComponent } from './find-falcone.component';

describe('FindFalconeComponent', () => {
  let component: FindFalconeComponent;
  let fixture: ComponentFixture<FindFalconeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindFalconeComponent ],
      imports:[HttpClientModule,RouterTestingModule],
      providers:[AppConfig]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFalconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
