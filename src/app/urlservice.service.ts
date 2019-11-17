import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UrlserviceService {
  url: string = "https://jsonplaceholder.typicode.com/todos";
  fetchData() {
    return this.http.get(this.url);
  }

  constructor(private http: HttpClient) {}
}
