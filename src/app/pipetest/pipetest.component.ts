import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipetest",
  templateUrl: "./pipetest.component.html",
  styleUrls: ["./pipetest.component.css"]
})
export class PipetestComponent implements OnInit {
  servers = [
    {
      instanceType: "medium",
      name: "Production Server",
      status: "stable",
      started: new Date(15, 1, 2015)
    },
    {
      instanceType: "large",
      name: "Database Server",
      status: "offline",
      started: new Date(14, 1, 2019)
    },
    {
      instanceType: "medium",
      name: "Staging Server",
      status: "offline",
      started: new Date(23, 1, 2017)
    },
    {
      instanceType: "Extra large",
      name: "Support Server",
      status: "stable",
      started: new Date(12, 1, 2018)
    },
    {
      instanceType: "large",
      name: "Load Balance Server",
      status: "stable",
      started: new Date(19, 1, 2018)
    },
    {
      instanceType: "small",
      name: "Testing Server",
      status: "unstable",
      started: new Date(22, 5, 2019)
    }
  ];

  constructor() {}

  ngOnInit() {}
  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      "list-group-item-success": server.status === "stable",
      "list-group-item-danger": server.status === "offline",
      "list-group-item-warning": server.status === "unstable"
    };
  }
}
