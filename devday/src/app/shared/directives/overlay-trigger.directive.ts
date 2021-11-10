import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { OverlayAction, OverlayEvent, OverlayService } from '../../services/overlay.service';


@Directive({
  selector: '[overlayTriggerFor]',
  host: {
    '(click)': 'toggleOverlay($event)'
  }
})
export class OverlayTriggerDirective implements OnInit, OnDestroy {
  public _overlayElement: any;
  private _overlayOpen: boolean = false;
  private _overlayRef: OverlayRef | null = null;
  private _portal: TemplatePortal<any>;
  public _overlayOpenEvent;
  private _overlayInstance;
  private _overlayTrigger;
  private overlayBody;
  private positionStrategy: any[] = [];
  private body = document.getElementsByTagName('body')[0];

  @Input('overlayTriggerFor')
  get overlay() { return this._overlayElement}
  set overlay(overlay) {
    if(overlay === this._overlayElement) {
      return
    }
    this._overlayElement = overlay
  }

  constructor(
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private _overlayService: OverlayService
  ) { }

  ngOnDestroy() {
    if(this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayInstance = null;
    }
  }

  ngOnInit() {
    this._overlayService.overlayActions.subscribe((action:OverlayAction) => {
      switch(action) {
        case OverlayAction.CLOSE_OVERLAY:
          this.closeOverlay();
          break;
        case OverlayAction.OPEN_OVERLAY:
          this.openOverlay();
          break;
      }
    })
  }

  toggleOverlay(event) {
    this.openOverlay();

    event.stopPropagation();
    event.preventDefault();
  }

  openOverlay() {
    const overlayRef = this._createOverlay();
    this._portal = this._portal || new TemplatePortal(this._overlayElement.templateRef, this._viewContainerRef);
    this._overlayInstance = overlayRef.attach(this._portal);
    this._overlayElement.openOverlay();

    this.overlayBody = this._overlayRef.overlayElement.querySelector('.scrollbar-inner');

    setTimeout(() => {
      this.overlayBody.classList.add('open');
      this.body.classList.add('open');
      this.handleCloseButtons();
    }, 50)

    this._overlayService.overlayEvents.emit(OverlayEvent.OVERLAY_OPENED)
  }

  closeOverlay() {
    if (this._overlayRef === null) {
      return;
    }
    if (this.overlayBody) {
        this.body.classList.remove('open');
          this.overlayBody.classList.remove('open');
    }
    if (this._overlayElement._fullPage) {
        this._overlayElement.closeOverlay();
        this._overlayRef.detach();
        this._overlayService.overlayEvents.emit(OverlayEvent.OVERLAY_CLOSED)
    } else {
        setTimeout(() => {
            this._overlayElement.closeOverlay();
            this._overlayRef.detach();
            this._overlayService.overlayEvents.emit(OverlayEvent.OVERLAY_CLOSED)
            }, 500);
    }
  }

  private _createOverlay(): OverlayRef {
    if(this._overlayRef) {
      return this._overlayRef
    }


    const body : any = document.getElementsByTagName('body');

    const config : OverlayConfig = {
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      width: '100vw'
    }

    this._overlayRef = this._overlay.create(config)

    this._overlay.position().global().centerHorizontally().centerVertically()


    return this._overlayRef
  }

  handleCloseButtons() {
    let closeButton = this._overlayRef.overlayElement.getElementsByClassName('close-overlay');
    console.log(closeButton.length, closeButton)
    if (closeButton.length > 0) {
      console.log('hasclosebutton')
      closeButton[0].addEventListener('click', () => {
        console.log('closeButton clicked')
        this.closeOverlay()
      })
    }
    this._overlayRef.backdropClick().subscribe(_ => this.closeOverlay());
  }
}
