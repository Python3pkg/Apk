import {Input, Output, EventEmitter, Component} from '@angular/core';

@Component({
  selector: 'sr-toggle',
  templateUrl: 'sr-toggle.html',
})
export class SrToggle {
  @Input() parameter : any;
  @Output('onChange') onChange = new EventEmitter();

  constructor() {
    this.parameter = {
      value : 0
    };
  }

  update() {
    this.parameter.value = this.parameter.value === 0 ? 1 : 0;
    this.onChange.emit(this.parameter);
  }
}