import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourit-button',
  templateUrl: './favourit-button.component.html',
  styleUrls: ['./favourit-button.component.scss']
})
export class FavouritButtonComponent implements OnInit {

  @Input() isFavourit : boolean = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  updateValue() {
    this.isFavourit = !this.isFavourit;
    this.change.emit(this.isFavourit);
  }

}
