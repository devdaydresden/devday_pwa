import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/classes/card';
import { Helper } from 'src/app/shared/helper/helper';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  private _dark : boolean = false;
  private _twoItems : boolean = false;
  @Input() data : Card[] = [];

  @Input()
  get dark() {return this._dark}
  set dark (value: any) { this._dark = Helper.setBoolean(value)};

  @Input()
  get twoItems() {return this._twoItems}
  set twoItems (value: any) { this._twoItems = Helper.setBoolean(value)};

  constructor() { }

  ngOnInit() {
  }

}
