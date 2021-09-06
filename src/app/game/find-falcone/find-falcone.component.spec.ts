import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfig } from '../../app.config';

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
  it('previous button should be disabled', () => {
    const button=fixture.debugElement.nativeElement.querySelector('.previous')
    component.currentSelection=0
    expect(button.disabled).toBeTruthy();
  });
  it('next button should be disabled', () => {
    const button=fixture.debugElement.nativeElement.querySelector('.next')
    component.currentSelection=4
    component.planetsToVisit=4
    expect(button.disabled).toBeTruthy();
  });
  

});
