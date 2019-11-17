import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subscription, BehaviorSubject } from "rxjs";
import { User } from "../authlogin/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-successlogged",
  templateUrl: "./successlogged.component.html",
  styleUrls: ["./successlogged.component.css"]
})
export class SuccessloggedComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log("Success Component :::");
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
      console.log("The User Object is >>>", this.isAuthenticated);
    });
  }
  logout() {
    this.authService.user.next(null);
    localStorage.removeItem("userData");
    this.router.navigate(["/"]);
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
