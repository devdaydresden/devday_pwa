import { Component, Input, OnInit, Output, EventEmitter, ElementRef, AfterViewInit, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { TabItem } from '../../classes/tab-item';
import { Helper } from '../../shared/helper/helper';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {

  @Input() data : TabItem[] = [];
  @Input() activeIndex : number = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  private tabs;

  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef:ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }


  prepareTabs() {
    this.tabs = this.elementRef.nativeElement.querySelectorAll('.nav-item');
  }

  /**
   * Changes active Index to index of clicked tab
   * @param index index to set
   */
  changeActiveIndex(index, event) {
    event.stopPropagation();
    this.activeIndex = index;
    this.updatedIndex();
  }

  /**
   * Emits event for changed activeIndex which is given to the outside of the component
   */
  updatedIndex() {
    this.activeIndexChange.emit(this.activeIndex);
  }

  ngOnDestroy() {
  }

}
