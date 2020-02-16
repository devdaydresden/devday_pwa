import { Component, OnInit, Input } from '@angular/core';
import { TimeSlot } from 'src/app/classes/time-slot';

@Component({
  selector: 'app-speaker-accordion',
  templateUrl: './speaker-accordion.component.html',
  styleUrls: ['./speaker-accordion.component.scss']
})
export class SpeakerAccordionComponent implements OnInit {
  public open : boolean = false;

  @Input() speakerID : string;
  public sessionsList : TimeSlot[] = [{
    "slot" : "14:30 - 15:30",
    "items": [
      {
        "sessionId" : "123456",
        "favourite" : true,
        "linkToSession" : true,
        "title" : "Testsession",
        "speaker" : "Max Mustermann",
        "type" : "session",
        "isFavourite": true,
        "location": "Gartensaal",
      },
      {
        "sessionId" : "123456",
        "favourite" : true,
        "linkToSession" : true,
        "title" : "Testsession",
        "speaker" : "Max Mustermann",
        "type" : "session",
        "isFavourite": true,
        "location": "Gartensaal",
      },
    ]
  },
  {
    "slot" : "16:00 - 17:00",
    "items": [
      {
        "sessionId" : "123456",
        "favourite" : true,
        "linkToSession" : true,
        "title" : "Testsession",
        "speaker" : "Max Mustermann",
        "type" : "session",
        "isFavourite": true,
        "location": "Gartensaal",
      },
      {
        "sessionId" : "123456",
        "favourite" : true,
        "linkToSession" : true,
        "title" : "Testsession",
        "speaker" : "Max Mustermann",
        "type" : "session",
        "isFavourite": true,
        "location": "Gartensaal",
      },
    ]
  }];

  constructor() { }

  ngOnInit() {
    this.getSpeakerInfo()
  }

  getSpeakerInfo() {
    // TODO: get Speaker Info from service

  }

  getSpeakerSessions() {
    // TODO: get speaker Sessions by data from speaker info call
  }

  toggleOpenState() {
    this.open =  !this.open
  }

}
