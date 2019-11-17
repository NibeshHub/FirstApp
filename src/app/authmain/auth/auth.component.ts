import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponse } from "./auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  @ViewChild("authForm") authForm: NgForm;
  constructor(private router: Router, private authservice: AuthService) {}
  isLogInMode = true;
  isLoading = false;
  error: string = null;
  ngOnInit() {}
  onSwitchMode() {
    this.isLogInMode = !this.isLogInMode;
  }
  loadLogInPage() {
    this.router.navigate(["/authlogin"]);
  }
  onSubmit() {
    this.error = null;
    let authObj: Observable<AuthResponse>;
    const value = this.authForm.value;
    value.returnSecureToken = true;
    this.isLoading = true;
    if (this.isLogInMode) {
      authObj = this.authservice.login(value);
    } else {
      authObj = this.authservice.signup(value);
      console.log("Form Submitted", value);
      this.authForm.reset();
    }

    authObj.subscribe(
      responseData => {
        this.isLoading = false;
        console.log("Got Response  ", responseData);
        this.router.navigate(["successlogged"]);
      },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
  }
}
