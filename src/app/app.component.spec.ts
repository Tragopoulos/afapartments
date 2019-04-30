import {TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a navigation bar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
  });

  it('should have a body', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should have a footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
