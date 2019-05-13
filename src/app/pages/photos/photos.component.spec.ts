import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: `
    <ng-container *ngTemplateOutlet="content"></ng-container> <app-photos></app-photos>
  `,
})
class WrapperComponent implements AfterContentInit {
  @ViewChild(PhotosComponent) appComponentRef: PhotosComponent;
  content: any;
  ngAfterContentInit() {
    this.content = this.appComponentRef.modalRef;
  }
}

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModalModule],
      declarations: [WrapperComponent, PhotosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    const wrapperComponent = fixture.debugElement.componentInstance;
    component = wrapperComponent.appComponentRef;
    fixture.detectChanges();
  });

  it('should create the Photos page', async(() => {
    expect(component).toBeDefined();
  }));
  it('should render the background video', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#bkgrd-video')).toBeTruthy();
  });
  it('should call modal Service open function when clicked ', async(() => {
    spyOn(component.modalService, 'open').and.callThrough();
    const el = fixture.debugElement.nativeElement.querySelector('#photo-one');
    el.click();
    expect(component.modalService.open).toHaveBeenCalled();
  }));

  it('should have 3 modal button list', () => {
    const el = fixture.debugElement.nativeElement.querySelector('#modal-buttons-list');
    expect(el.childNodes.length).toBe(3);
  });
});
