import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss']
})
export class IconLinkComponent implements OnInit {

  @Input() icon : string;
  @Input() linkTo: string;
  @Input() text:string;

  constructor() { }

  ngOnInit() {
  }

}
