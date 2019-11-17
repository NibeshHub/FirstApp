import { Component, OnInit } from "@angular/core";
import { OuserService } from "./ouser.service";

@Component({
  selector: "app-observable-test",
  templateUrl: "./observable-test.component.html",
  styleUrls: ["./observable-test.component.css"]
})
export class ObservableTestComponent implements OnInit {
  isActivated = false;
  constructor(private ouserService: OuserService) {}

  ngOnInit() {
    this.ouserService.activatedEmitter.subscribe(subValue => {
      this.isActivated = subValue;
    });
  }
}
