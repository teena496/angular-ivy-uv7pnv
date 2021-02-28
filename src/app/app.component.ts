import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Teena ";
  a: Array<string> = [];
  mode = "submit"
  currentIndex:number

  handleClick(e){
    this.a.push(e.value);
    e.value = "";
  };

  delete(index) {
    this.a.splice(index, 1);
  }

  edit(i, textbox) {
    textbox.value = this.a[i];
    this.currentIndex = i
    this.mode = "update"
  }

  updateClick(e){
    this.a[this.currentIndex]= e.value;
    e.value=''
    this.mode='submit'
  }
}
