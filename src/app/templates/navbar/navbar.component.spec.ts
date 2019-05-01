import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the navigation bar', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mdb-navbar-brand')).toBeTruthy();
  });

  it('should render the Home button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#button-one')).toBeTruthy();
  });

  it('should render the Gallery button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#button-two')).toBeTruthy();
  });

  it('should render the Contact button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#button-three')).toBeTruthy();
  });

  it('should render the dropdown', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.dropdown')).toBeTruthy();
  });


});
