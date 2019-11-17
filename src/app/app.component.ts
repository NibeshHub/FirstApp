import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  x: number;
  ngOnInit() {}
}
//<0 lowlow
// 0<x<10 low
//10<x<20 normal
//20<x<30 high
//x>30 high high
