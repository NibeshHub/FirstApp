import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users = [
    { id: 1, name: "Max" },
    { id: 2, name: "Ted" },
    { id: 3, name: "Rian" },
    { id: 4, name: "Psua" },
    { id: 5, name: "Meltin" },
    { id: 6, name: "Joax" }
  ];
  constructor() {}

  ngOnInit() {}
}
