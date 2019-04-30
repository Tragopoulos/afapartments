import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhotosComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openDarkModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  ngOnInit() {
  }

}
