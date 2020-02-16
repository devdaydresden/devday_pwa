import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonSwitchItem } from 'src/app/classes/button-switch';

@Component({
  selector: 'app-button-switch',
  templateUrl: './button-switch.component.html',
  styleUrls: ['./button-switch.component.scss']
})
export class ButtonSwitchComponent implements OnInit {
  @Input() items : ButtonSwitchItem[];
  @Output() change : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  setActive(value){
    console.log(value)
    this.change.emit(value);
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      if (element.value === value) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    }
  }
}
