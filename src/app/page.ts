import {Component} from '@angular/core';
import {OnsNavigator} from 'angular2-onsenui';

@Component({
  selector: 'ons-page[page]',
  template: require('./page.html'),
  styles: [require('./page.css')]
})
export class Page {
  data: string = 'data';

  constructor(private navi : OnsNavigator) {
    console.log('TESTT');
  }

  push() {
    this.navi.element.pushPage(Page);
  }
}


