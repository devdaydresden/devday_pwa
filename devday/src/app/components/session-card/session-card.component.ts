import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SessionCard } from 'src/app/classes/session-card';
import { Helper } from 'src/app/shared/helper/helper';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss']
})
export class SessionCardComponent implements OnInit {
  private _fullWidth : boolean = false;
  public cardType : string = 'type-session';

  @Input() sessionData : SessionCard = {
    "sessionId" : "123456",
    "favourite" : true,
    "linkToSession" : true,
    "title" : "Testsession",
    "speaker" : "Max Mustermann",
    "type" : "session",
    "isFavourite": false,
    "location": "Gartensaal",
  };

  @Input()
  get fullWidth() {return this._fullWidth}
  set fullWidth (value: any) { this._fullWidth = Helper.setBoolean(value)};

  constructor() { }

  ngOnInit() {
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
