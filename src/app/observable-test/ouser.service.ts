import { Injectable, EventEmitter } from "@angular/core";
Injectable({ providedIn: "root" });
export class OuserService {
  activatedEmitter = new EventEmitter<boolean>();
}
