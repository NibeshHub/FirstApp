import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RserverService } from "../rserver/rserver.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CanComponentDeactivate } from "src/app/can-deactivate-guard.service";

@Component({
  selector: "app-edit-rserver",
  templateUrl: "./edit-rserver.component.html",
  styleUrls: ["./edit-rserver.component.css"]
})
export class EditRserverComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName: string;
  serverStatus: string;
  allowEdit = false;
  changesServer = false;
  constructor(
    private serverService: RserverService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("Edit component QueryParams", this.route.snapshot.queryParams);
    console.log("Edit component Fragments ", this.route.snapshot.fragment);
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params["allowEdit"] == "1" ? true : false;
    });
    const id = +this.route.snapshot.params["id"];
    this.server = this.serverService.getServer(id);
    this.route.params.subscribe((param: Params) => {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log("Server status is ", this.serverStatus);
  }
  onUpdateServer() {
    console.log(
      "Updating Server",
      this.server.id,
      this.serverName,
      this.serverStatus
    );
    this.serverService.updateServers(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });

    this.changesServer = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesServer
    ) {
      return confirm("Do you want to discard this changes ?");
    } else {
      return true;
    }
  }
}
