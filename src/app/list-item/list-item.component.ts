import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItemComponent implements OnInit {
  constructor() {}

  @Input() item;
  @Input() i;
  @Input() l;

  @Output() deleteEv = new EventEmitter<any>();
  @Output() editEv = new EventEmitter<any>();

  ngOnInit() {}

  delete(i) {
    console.log(i)
    this.deleteEv.emit(i);
  }

  edit(i) {
    this.editEv.emit(i);
  }
}
