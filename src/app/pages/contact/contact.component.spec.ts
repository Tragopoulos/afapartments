import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {AppComponent} from '../../app.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the map', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('iframe')).toBeTruthy();
  });

  it('should render the form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should render the h1 tag label', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1')).toBeTruthy();
  });

  it('should render the description p tag label', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p')).toBeTruthy();
  });

  it('should render the button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input.btn')).toBeTruthy();
  });

  it('should render the name label', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label.form_name')).toBeTruthy();
  });

  it('should render the lastname label', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label.form_lastname')).toBeTruthy();
  });

  it('should render the email label', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label.form_email')).toBeTruthy();
  });

  it('should render the phone label', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label.form_phone')).toBeTruthy();
  });

  it('should render the message label', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label.form_message')).toBeTruthy();
  });
});
