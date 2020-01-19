import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormEventObject } from 'src/app/classes/form-event-object';
import { Helper } from 'src/app/shared/helper/helper';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() ident : string = '';
  @Input() label : string;
  @Input() disabled : boolean = null;
  @Input() readonly : boolean = null;
  @Input() value : string = '';
  @Input() name : string = '';
  @Input() icon : string = null;
  @Input() placeholder : string = '';
  @Input() mandatory : boolean = false;
  @Input() error : boolean = false;
  @Input() errorMessage : string;
  @Input() formGroupClasses : string[];
  @Output() change: EventEmitter<FormEventObject> = new EventEmitter<FormEventObject>();
  @Output() valueChange = new EventEmitter<string>();

  private _pattern: string = null;
  private eventObject: FormEventObject;

  constructor() { }

  ngOnInit() {
  }

  public handleValueChanged(event) {

    event.stopPropagation();
    event.preventDefault();

    this.eventObject = {
      value: this.value,
      name: this.name
    };

    this.change.emit(this.eventObject);
    this.valueChange.emit(this.value);
  }

  /**
   * Function Comment
   */
  public handleValidation() {

    if(this._pattern === null) {
      this.setErrorState(this.value == '' && this.mandatory);
      return;
    }

    const isLikePattern = Helper.stringMatchesPattern(this.value, this._pattern);

    if(this.mandatory) {
      this.setErrorState(this.value == '' || !isLikePattern);
      return;
    }
    this.setErrorState(this.value != '' && !isLikePattern);
  }

  /**
   * sets the error if changed and triggeres event
   */
  @Output() errorStateChanged = new EventEmitter<boolean>();
  private setErrorState(state) {
    if(this.error !== state) {
      this.error = state;
      this.errorStateChanged.emit(this.error);
    }
  }

}
