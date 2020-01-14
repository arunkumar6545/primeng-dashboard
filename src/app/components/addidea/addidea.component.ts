import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addidea',
  templateUrl: './addidea.component.html',
  styleUrls: ['./addidea.component.css']
})
export class AddideaComponent implements OnInit {

  @Input() display = false;
  @Output() valueChanged = new EventEmitter();
  showclose = false;

  sideoverlaystyle = {
    'width': '50em',
    'background-color': 'white'
  };

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(this.display){
      this.display = !this.display;
      this.valueChanged.emit(this.display);
    }
  }

}
