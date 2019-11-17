import { Component, OnInit } from "@angular/core";
import { UrlserviceService } from "../urlservice.service";
@Component({
  selector: "app-servicetest",
  templateUrl: "./servicetest.component.html",
  styleUrls: ["./servicetest.component.css"]
})
export class ServicetestComponent implements OnInit {
  public data;

  getdata() {
    this.data = this.serviceObj.fetchData();
  }

  getdatasubscribe() {
    this.serviceObj.fetchData().subscribe(
      sucess => {
        this.data = sucess;
        return sucess;
      },
      error => {
        return error;
      }
    );
  }
  constructor(private serviceObj: UrlserviceService) {}

  ngOnInit() {}
}
