import { Component, OnInit } from '@angular/core';

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
