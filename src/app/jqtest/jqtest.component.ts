import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-jqtest",
  templateUrl: "./jqtest.component.html",
  styleUrls: ["./jqtest.component.css"]
})
export class JqtestComponent implements OnInit {
  constructor() {}
  datais: any;
  ngOnInit() {
    $(document).ready(() => {
      $("button").click(function() {
        $.get("demo_test.asp", (data, status) => {
          this.datais = data;
          console.log("Status is " + this.datais);
        });
      });
    });
  }
}
