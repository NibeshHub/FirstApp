import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directive-test",
  templateUrl: "./directive-test.component.html",
  styleUrls: ["./directive-test.component.css"]
})
export class DirectiveTestComponent implements OnInit {
  odnumber = [1, 3, 5, 7, 9];
  evennumber = [2, 4, 6, 8];
  onlyOdd = false;
  constructor() {}

  ngOnInit() {}
}
