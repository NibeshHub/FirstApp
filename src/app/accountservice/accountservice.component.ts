import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";

@Component({
  selector: "app-accountservice",
  templateUrl: "./accountservice.component.html",
  styleUrls: ["./accountservice.component.css"],
  providers: [AccountsService]
})
export class AccountserviceComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  onAccountAdded(newAccount: { name: string; status: string }) {}

  onStatusUpdated(updatedInfo: { id: number; newStatus: string }) {}

  constructor(private accountservice: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountservice.accounts;
  }
}
