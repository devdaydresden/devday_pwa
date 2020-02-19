import { Injectable, EventEmitter } from '@angular/core';

export enum OverlayAction {
  OPEN_OVERLAY,
  CLOSE_OVERLAY
}

export enum OverlayEvent {
  OVERLAY_OPENED,
  OVERLAY_CLOSED
}

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  public overlayActions = new EventEmitter<OverlayAction>()
  public overlayEvents = new EventEmitter<OverlayEvent>()

  constructor() { }
}
