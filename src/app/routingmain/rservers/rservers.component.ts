import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RserverService } from "./rserver/rserver.service";

@Component({
  selector: "app-rservers",
  templateUrl: "./rservers.component.html",
  styleUrls: ["./rservers.component.css"]
})
export class RserversComponent implements OnInit {
  private rservers: { name: string }[] = [];

  constructor(private router: Router, private rservice: RserverService) {}
  reloadServer() {
    this.router.navigate(["/servers"]);
  }
  loadUsers() {
    this.router.navigate(["/users"]);
  }

  ngOnInit() {
    this.rservers = this.rservice.getServers();
  }
}
