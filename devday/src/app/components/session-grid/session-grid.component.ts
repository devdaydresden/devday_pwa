import { Component, OnInit, Input } from '@angular/core';
import { TimeSlot } from 'src/app/classes/time-slot';

@Component({
  selector: 'app-session-grid',
  templateUrl: './session-grid.component.html',
  styleUrls: ['./session-grid.component.scss']
})
export class SessionGridComponent implements OnInit {

  @Input() timeSlot : TimeSlot;
  @Input() listView : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
