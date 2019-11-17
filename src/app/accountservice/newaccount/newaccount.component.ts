import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { LoggingApp } from "../loggingapp.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-newaccount",
  templateUrl: "./newaccount.component.html",
  styleUrls: ["./newaccount.component.css"]
})
export class NewaccountComponent implements OnInit {
  constructor(private accountservice: AccountsService) {
    this.accountservice.c2cEvent.subscribe((status: string) => {
      alert("New Status " + status);
    });
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.addAccount(accountName, accountStatus);
    console.log("New Account creation attempted");
  }
  ngOnInit() {}
}
