import { OnInit, Injectable, EventEmitter } from "@angular/core";
import { LoggingApp } from "./loggingapp.service";
@Injectable()
export class AccountsService implements OnInit {
  accounts = [
    { name: "Master Account", status: "Active" },
    { name: "Test Account", status: "Inactive" },
    { name: "Hidden Account", status: "Unknown" }
  ];
  c2cEvent = new EventEmitter<string>();
  constructor(private logservice: LoggingApp) {}
  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.logservice.login(status);
  }
  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.logservice.login(status);
  }
  ngOnInit() {}
}
