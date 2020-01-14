import { Component } from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  display = false;

  constructor(public app: AppComponent) {}

  displayEvent(value){
    this.display = value;
  }

}
