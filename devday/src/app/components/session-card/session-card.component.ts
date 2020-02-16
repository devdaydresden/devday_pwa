import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SessionCard } from 'src/app/classes/session-card';
import { Helper } from 'src/app/shared/helper/helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss']
})
export class SessionCardComponent implements OnInit {
  private _fullWidth : boolean = false;
  public cardType : string = 'type-session';

  @Input() sessionData : SessionCard;
  @Input() sessionOnly : boolean = false;

  @Input()
  get fullWidth() {return this._fullWidth}
  set fullWidth (value: any) { this._fullWidth = Helper.setBoolean(value)};

  constructor(private router : Router) { }

  ngOnInit() {
    if (this.sessionData) {
      switch (this.sessionData.type) {
        case 'break':
          this.cardType = 'type-break'
          break;
        case 'lightning':
            this.cardType = 'type-lightning'
            break;
        default:
          break;
      }
    }

  }

  updateFavorit(event) {
    // TODO: Handle the update here within favouritService which needs to be created
    console.log(this.sessionData.sessionId, event)
  }

  showSession() {
    if (this.sessionData.linkToSession) {
      this.router.navigate(['/session/' + this.sessionData.sessionId])
    }
  }

}
