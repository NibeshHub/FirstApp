import { Component, OnInit } from "@angular/core";
import { RserverService } from "./rserver.service";
import { ActivatedRoute, Params, Route, Router } from "@angular/router";

@Component({
  selector: "app-rserver",
  templateUrl: "./rserver.component.html",
  styleUrls: ["./rserver.component.css"]
})
export class RserverComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private rserverservice: RserverService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.server = this.rserverservice.getServer(id);
    this.route.params.subscribe((params: Params) => {
      this.server = this.rserverservice.getServer(+params["id"]);
    });
  }
  onEditServer() {
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve"
    });
  }
}
