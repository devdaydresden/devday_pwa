import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/classes/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginTabs = {
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

  constructor() { }

  ngOnInit(): void {
  }

  public tabChanged(tabIndex: number) {
    this.loginTabs.activeIndex = tabIndex;
  }

}
