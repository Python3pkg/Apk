import {IONIC_DIRECTIVES} from 'ionic-angular';
import {Input, Component} from '@angular/core';

@Component({
  selector: 'sr-slider',
  templateUrl: 'build/components/sr-slider/sr-slider.html',
  directives: [IONIC_DIRECTIVES]
})
export class SrSlider {
  @Input() parameter : Object;

  constructor() {
    this.parameter = {
      name: 'Name',
      minimum: 0,
      maximum: 0,
      current: 0,
      unit: ''
    };
  }
}
