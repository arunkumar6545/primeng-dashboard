import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display = false;
  title = 'app';
  

  mobileMenuActive: boolean;

  onMobileMenuButton (event) {
    this.mobileMenuActive = !this.mobileMenuActive;
    event.preventDefault();
  }

  


  hideMobileMenu(event) {
    this.mobileMenuActive = false;
    event.preventDefault();
  }

  displayEvent(value){
      this.display = value;
  }
}
