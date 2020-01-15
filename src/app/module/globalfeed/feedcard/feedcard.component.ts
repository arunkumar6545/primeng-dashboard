import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { DynamiccomponentloadingService } from "src/app/module/globalfeed/services/dynamiccomponentloading.service";
import { IdeadiscussionComponent } from "../ideadiscussion/ideadiscussion.component";

@Component({
  selector: "app-feedcard",
  templateUrl: "./feedcard.component.html",
  styleUrls: ["./feedcard.component.css"]
})
export class FeedcardComponent implements OnInit {
  name = "dynamic";

  @ViewChild("dynamic", {
    read: ViewContainerRef,
    static: true
  })
  viewContainerRef: ViewContainerRef;
  service: DynamiccomponentloadingService;
  constructor(service: DynamiccomponentloadingService) {
    this.service = service;
  }
  ngOnInit() {
    this.service.setRootViewContainerRef(this.viewContainerRef);
    this.service.addDynamicComponent(IdeadiscussionComponent);
  }
}
