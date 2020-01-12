import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/classes/card';

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

}
