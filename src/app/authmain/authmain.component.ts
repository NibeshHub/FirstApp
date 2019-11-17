import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-authmain",
  templateUrl: "./authmain.component.html",
  styleUrls: ["./authmain.component.css"]
})
export class AuthmainComponent implements OnInit, OnDestroy {
  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.authservice.autoLogin();
  }
  ngOnDestroy() {
    this.authservice.user.next(null);
    localStorage.removeItem("userData");
  }
}
