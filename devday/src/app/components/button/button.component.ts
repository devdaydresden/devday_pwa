import { Component, OnInit, Input } from '@angular/core';
import { Helper } from 'src/app/shared/helper/helper';

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class.btn]': 'true',
    '[class.text]': 'btnText',
    '[class.outline]': 'this._outline',
    '[class.fullWidth]': 'this._fullWidth',
    '[class.centered]': 'this._centered'
  }
})
export class ButtonComponent implements OnInit {
  private _outline: boolean;
  private _fullWidth: boolean;
  private _centered: boolean;

  @Input()
  get outline() {return this._outline}
  set outline (value: any) { this._outline = Helper.setBoolean(value)};

  @Input()
  get fullWidth() {return this._fullWidth}
  set fullWidth (value: any) { this._fullWidth = Helper.setBoolean(value)};

  @Input()
  get centered() {return this._centered}
  set centered (value: any) { this._centered = Helper.setBoolean(value)};

  constructor() { }

  ngOnInit() {
  }

}
