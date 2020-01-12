import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Helper } from '../../shared/helper/helper';
import { FormEventObject } from 'src/app/classes/form-event-object';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
    @Input() type : string = 'text';
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


    @Input()
    set pattern(pattern) { this._pattern = (pattern ? pattern : null); };
    get pattern() { return this._pattern; };

    private _pattern: string = null;
    private eventObject: FormEventObject;

    /**
     * Function Comment
     */
    constructor() {}

    /**
     * Function Comment
     */
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
