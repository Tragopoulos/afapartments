import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FooterComponent} from './footer.component';


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title')).toBeTruthy();
  });

  it('should render the subtitle', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#subtitle')).toBeTruthy();
  });

  it('should render the list with the external advertisements', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#ext-ads')).toBeTruthy();
  });

  it('should render the list with the share buttons', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#share')).toBeTruthy();
  });

  it('should render the list with the copyright section', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.footer-copyright')).toBeTruthy();
  });
});
