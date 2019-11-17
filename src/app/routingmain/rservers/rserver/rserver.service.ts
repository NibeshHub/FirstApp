import { OnInit, Injectable } from "@angular/core";
@Injectable()
export class RserverService implements OnInit {
  rservers: { id: number; name: string; status: string }[] = [
    { id: 1, name: "Server1", status: "Online" },
    { id: 2, name: "Server2", status: "Offline" },
    { id: 3, name: "Server3", status: "Online" },
    { id: 4, name: "Server4", status: "Dead" }
  ];

  getServers() {
    return this.rservers;
  }
  getServer(id: number) {
    const server = this.rservers.find(s => {
      return s.id === id;
    });
    return server;
  }

  updateServers(id: number, serverdata: { name: string; status: string }) {
    const server = this.rservers.find(s => {
      return s.id === id;
    });

    if (server) {
      server.name = serverdata.name;
      server.status = serverdata.status;
    }
  }

  ngOnInit() {}
}
