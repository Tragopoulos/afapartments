import {Component, Inject, Injector, OnInit, PLATFORM_ID, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhotosComponent implements OnInit {
  modalService: NgbModal;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private injector: Injector
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.modalService = this.injector.get(NgbModal);
    }
  }
  @ViewChild('content') modalRef: TemplateRef<any>;
  openDarkModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  ngOnInit() {
  }

}
