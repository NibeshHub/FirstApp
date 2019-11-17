import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { LoggingApp } from "../loggingapp.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  constructor(private accountservice: AccountsService) {}

  onSetTo(status: string) {
    this.accountservice.updateAccount(this.id, status);
    this.accountservice.c2cEvent.emit(status);
  }
  ngOnInit() {}
}
