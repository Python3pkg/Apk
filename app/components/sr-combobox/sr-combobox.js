import {IONIC_DIRECTIVES} from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
  selector: 'sr-combobox',
  templateUrl: 'build/components/sr-combobox/sr-combobox.html',
  directives: [IONIC_DIRECTIVES]
})
export class SrCombobox {
  constructor() {
    this.option = 'asd';
    this.parameter = {
      name: 'Parameter name',
      options: [{
        value: 'teste',
        name: 'Name'
      },
      {
        value: 'asd',
        name: 'Name dsa'
      }]
    };
  }
}
