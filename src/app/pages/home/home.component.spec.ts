import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header image', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.full-bg-img')).toBeTruthy();
  });

  it('should render the description', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#description')).toBeTruthy();
  });

  it('should render the left image', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#img-half')).toBeTruthy();
  });

  it('should render the list title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#list-title')).toBeTruthy();
  });

  it('should render the description list', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#description-list')).toBeTruthy();
  });
});
