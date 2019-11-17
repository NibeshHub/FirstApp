import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { PostData } from "./PostData.model";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })
export class PostDataService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePostData(postData: PostData) {
    this.http
      .post("https://firstapp-b7840.firebaseio.com/post.json", postData, {
        observe: "response"
      })
      .subscribe(
        responseData => {
          console.log("Got Response", responseData);
        },
        errors => {
          this.error.next(errors.message);
        }
      );
  }
  fetchPosts() {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("newkey", "ok");
    httpParams = httpParams.append("key", "pretty");

    return this.http
      .get<{ [key: string]: PostData }>(
        "https://firstapp-b7840.firebaseio.com/post.json",
        {
          headers: new HttpHeaders({ "custom-header": "Hello" }),
          params: httpParams
        }
      )
      .pipe(
        map(respondData => {
          const postArrayData: PostData[] = [];
          for (const key in respondData) {
            if (respondData.hasOwnProperty(key)) {
              postArrayData.push({ ...respondData[key], id: key });
            }
          }
          return postArrayData;
        })
      );
  }
  deleteData() {
    return this.http.delete("https://firstapp-b7840.firebaseio.com/post.json", {
      observe: "events"
    });
  }
}
