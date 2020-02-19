import { Component, OnInit, Input, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  exportAs: 'appOverlay'
})
export class OverlayComponent implements OnInit, OnDestroy {

  public open: boolean = false;
  @Input() title : string;

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  constructor(
  ) {  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  openOverlay() {
    if (!this.open) {
      this.open = true;
    }
  }

  closeOverlay() {
    if (this.open) {
      this.open = false;
    }
  }

}
