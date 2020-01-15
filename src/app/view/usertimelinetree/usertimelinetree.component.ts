import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-usertimelinetree",
  templateUrl: "./usertimelinetree.component.html",
  styleUrls: ["./usertimelinetree.component.scss"]
})
export class UsertimelinetreeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @HostListener('scroll', ['$event']) 
  scrollHandler(event) {
    console.debug("Scroll Event");
  }
}
