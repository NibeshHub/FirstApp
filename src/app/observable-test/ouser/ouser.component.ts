import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OuserService } from "../ouser.service";

@Component({
  selector: "app-ouser",
  templateUrl: "./ouser.component.html",
  styleUrls: ["./ouser.component.css"]
})
export class OuserComponent implements OnInit {
  id: number = 1;
  retVal() {
    console.log("Value function");
  }

  constructor(
    private route: ActivatedRoute,
    private ouserService: OuserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
    const x: number = 40;
    const ff = function(val: number) {
      return val * 2;
    };
    console.log("FF Value is ", ff(x));
  }
  onActivated() {
    this.ouserService.activatedEmitter.emit(true);
  }
}
