import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconSizes } from '../../classes/enum/icon-sizes.enum'

@Component({
  selector: '[app-icon], [icon]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() iconSrc : String;
  @Input() size: any = "Regular";
  @Input() position : String;
  public isMegaIcon : boolean;

  styles : Object;
  iconSize : String

  @HostBinding('style') get componentStyles() {
    if (this.isMegaIcon) {
      return this.sanitizer.bypassSecurityTrustStyle(`height: 40px; width: ${this.iconSize}px; line-height: ${this.iconSize}px`)
    } else {
      return this.sanitizer.bypassSecurityTrustStyle(`height: ${this.iconSize}px; width: ${this.iconSize}px; line-height: ${this.iconSize}px`)
    }
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.isMegaIcon = this.size === 'Mega';
    this.iconSize = IconSizes[this.size]

    if (this.isMegaIcon) {
      this.styles = {
        'height': 'auto',
        'width.px': this.iconSize,
      }
    } else {
      this.styles = {
        'height.px': this.iconSize,
        'width.px': this.iconSize,
      }
    }

  }
}
