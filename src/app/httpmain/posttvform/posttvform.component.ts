import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PostData } from "./PostData.model";
import { PostDataService } from "./postData.service";
import { Subscriber, Subscription } from "rxjs";
@Component({
  selector: "app-posttvform",
  templateUrl: "./posttvform.component.html",
  styleUrls: ["./posttvform.component.css"]
})
export class PosttvformComponent implements OnInit, OnDestroy {
  @ViewChild("postForm") postForm: NgForm;
  private posterror: Subscription;
  constructor(
    private http: HttpClient,
    private postdataservice: PostDataService
  ) {}
  recievedData: PostData[] = [];
  isfetching = false;

  error = null;

  ngOnInit() {
    this.posterror = this.postdataservice.error.subscribe(errordata => {
      this.error = errordata;
    });
    this.onFetchData();
  }
  onPostData() {
    console.log("Submitted post Form ", this.postForm);
    const value: PostData = this.postForm.value;
    this.postdataservice.createAndStorePostData(value);
  }
  onFetchData() {
    this.fetchPostData();
  }

  deletePostData() {
    this.postdataservice.deleteData().subscribe(deleted => {
      this.recievedData = [];
      console.log("Deleted Data ", deleted);
    });
    // this.fetchPostData();
  }

  fetchPostData() {
    this.isfetching = true;
    this.postdataservice.fetchPosts().subscribe(
      postedData => {
        this.isfetching = false;
        console.log("Got Data ", postedData);
        this.recievedData = postedData;
      },
      errors => {
        this.isfetching = false;
        this.error = errors.message;
        console.log("Got the errors ", errors.message);
      }
    );
  }
  ngOnDestroy() {
    this.posterror.unsubscribe();
  }
}
