import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';


describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'FindingFalcone'`, () => {
    const fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges()
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('.header').textContent).toContain('FindingFalcone');
  });
  it(`should click`,waitForAsync(()=>{
    
    const fixture=TestBed.createComponent(NavComponent)
    fixture.detectChanges()
    const button=fixture.debugElement.nativeElement.querySelector('.reset')
    const component=fixture.componentInstance
    spyOn(component,'reset')
    button.click()
    fixture.whenStable().then(()=>{
      expect(component.reset).toHaveBeenCalled()
      
    })
  }))

});
