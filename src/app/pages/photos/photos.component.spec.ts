import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { AfterContentInit, Component, NO_ERRORS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   template: `<ng-container *ngTemplateOutlet="content"></ng-container>
//     <app-navbar></app-navbar>`,
// })
// class WrapperComponent implements AfterContentInit {
//   @ViewChild(PhotosComponent) appComponentRef: PhotosComponent;
//   content: any;
//   ngAfterContentInit() {
//     this.content = this.appComponentRef.modalRef;
//   }
// }
describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModalModule],
      declarations: [PhotosComponent /*WrapperComponent*/],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
  });

  it('should create the Photos page', () => {
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

  it('should call the openDarkModal method when click on the first photo', async(() => {
    spyOn(component, 'openDarkModal');
    el = fixture.debugElement.query(By.css('#photo-one')).nativeElement;
    el.click();
    expect(component.openDarkModal).toHaveBeenCalled();
  }));

  it('should render the second photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-two')).toBeTruthy();
  });

  it('should call the openDarkModal method when click on the second photo', async(() => {
    spyOn(component, 'openDarkModal');
    el = fixture.debugElement.query(By.css('#photo-two')).nativeElement;
    el.click();
    expect(component.openDarkModal).toHaveBeenCalled();
  }));

  it('should render the third photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-three')).toBeTruthy();
  });

  it('should call the openDarkModal method when click on the third photo', async(() => {
    spyOn(component, 'openDarkModal');
    el = fixture.debugElement.query(By.css('#photo-three')).nativeElement;
    el.click();
    expect(component.openDarkModal).toHaveBeenCalled();
  }));

  it('should render the fourth photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-four')).toBeTruthy();
  });

  it('should call the openDarkModal method when click on the fourth photo', async(() => {
    spyOn(component, 'openDarkModal');
    el = fixture.debugElement.query(By.css('#photo-four')).nativeElement;
    el.click();
    expect(component.openDarkModal).toHaveBeenCalled();
  }));

  it('should render the fifth photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-five')).toBeTruthy();
  });

  it('should call the openDarkModal method when click on the fifth photo', async(() => {
    spyOn(component, 'openDarkModal');
    el = fixture.debugElement.query(By.css('#photo-five')).nativeElement;
    el.click();
    expect(component.openDarkModal).toHaveBeenCalled();
  }));

  it('should render the sixth photo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#photo-six')).toBeTruthy();
  });

  it('should call the openDarkModal method when click on the sixth photo', async(() => {
    spyOn(component, 'openDarkModal');
    el = fixture.debugElement.query(By.css('#photo-six')).nativeElement;
    el.click();
    expect(component.openDarkModal).toHaveBeenCalled();
  }));

  it('should call modal Service open function when clicked ', async(() => {
    spyOn(component.modalService, 'open').and.callThrough();
    el = fixture.debugElement.nativeElement.querySelector('#photo-one');
    el.click();
    expect(component.modalService.open).toHaveBeenCalled();
  }));

  // it('should have', async(() => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   const headerText = (compiled.debugElement.queryAll(By.css('#ng-modal'))[0].nativeElement.innerText);
  //   expect(headerText).toBeTruthy();
  // }));
});
