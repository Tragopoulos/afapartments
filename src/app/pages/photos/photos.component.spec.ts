import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the background video', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#bkgrd-video')).toBeTruthy();
  });

  it('should render the main video', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#video')).toBeTruthy();
  });

  it('should render the first photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-one')).toBeTruthy();
  });

  it('should render the second photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-two')).toBeTruthy();
  });

  it('should render the third photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-three')).toBeTruthy();
  });

  it('should render the fourth photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-four')).toBeTruthy();
  });

  it('should render the fifth photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-five')).toBeTruthy();
  });

  it('should render the sixth photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-six')).toBeTruthy();
  });


});
