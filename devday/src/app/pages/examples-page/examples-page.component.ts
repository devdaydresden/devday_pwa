import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/classes/card';
import { TimeSlot } from 'src/app/classes/time-slot';
import { SessionCard } from 'src/app/classes/session-card';
import { ButtonSwitchItem } from 'src/app/classes/button-switch';

@Component({
  selector: 'app-examples-page',
  templateUrl: './examples-page.component.html',
  styleUrls: ['./examples-page.component.scss']
})
export class ExamplesPageComponent implements OnInit {

  public tabExample = {
    activeIndex: 0,
    data: [{
      text : 'Login',
    } , {
      text : 'Registrieren',
    }]
  };

  public cards : Card[] = [
    {
      text: 'Sessions',
      icon: 'ic_sessions',
      link: '/test'
    },
    {
      text: 'Speaker',
      icon: 'ic_speaker',
      link: '/test'
    },
    {
      text: 'Location',
      icon: 'ic_location',
      link: '/test'
    }
  ];

  public sessionCard : SessionCard = {
    "sessionId" : "123456",
    "favourite" : true,
    "linkToSession" : true,
    "title" : "Testsession",
    "speaker" : "Max Mustermann",
    "type" : "session",
    "isFavourite": true,
    "location": "Gartensaal",
  };

  public sessionSlotsExample : TimeSlot = {
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
      }
    ]
  }

  public sessionsAsList :boolean = true;

  public buttonSwitchItems : ButtonSwitchItem[] = [
    {
      value: 'abreast',
      text: 'Abreast',
      selected: true
    },
    {
      value: 'among',
      text: 'Among',
      selected: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  /**
   * @param tabIndex (Number)
   */
  public tabChanged(tabIndex: number) {
    this.tabExample.activeIndex = tabIndex;
  }

  sortChange(event) {
    console.log(event)
    if (event === 'abreast') {
      this.sessionsAsList = true;
    } else if (event === 'among') {
      this.sessionsAsList = false;
    }
  }

}
