import {
  Component,
  OnInit,
  Input,
  HostListener,
  Output,
  EventEmitter
} from "@angular/core";
import { idea } from "../model/idea";

const defaultIdea: idea = {
  createdBy: "u55237",
  description: "",
  tags: [],
  title: "",
  uploadedFiles: []
};

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
    uploadedFiles: []
  };

  clear(){
    this.addIdea = defaultIdea;
  }

  onUpload(event) {
    for(let file of event.files) {
        this.addIdea.uploadedFiles.push(file);
    }
    console.log(JSON.stringify(this.addIdea));
  }

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

  constructor() {}

  submit(){
    console.log(JSON.stringify(this.addIdea))
  }
}
