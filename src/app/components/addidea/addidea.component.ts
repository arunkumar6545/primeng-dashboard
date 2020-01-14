import {
  Component,
  OnInit,
  Input,
  HostListener,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-addidea",
  templateUrl: "./addidea.component.html",
  styleUrls: ["./addidea.component.css"]
})
export class AddideaComponent implements OnInit {
  @Input() display = false;
  @Output() valueChanged = new EventEmitter();
  showclose = false;

  addIdea: idea = {
    createdBy: "u552379",
    description: "",
    tags: [],
    title: "",
  };

  sideoverlaystyle = {
    width: "50em",
    "background-color": "white",
    "z-index": 9999,
    "overflow-y": "scroll"
  };

  ngOnInit() {}

  @HostListener("document:keydown.escape", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (this.display) {
      this.display = !this.display;
      this.valueChanged.emit(this.display);
    }
  }

  uploadedFiles: any[] = [];

  constructor() {}

  onUpload(event) {
    console.log("hit");
    for (let file of event.files) {
      console.log(file.name);
      this.uploadedFiles.push(file);
    }
  }

  submit(){
    console.log(JSON.stringify(this.addIdea))
  }
}
