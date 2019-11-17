import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable, observable } from "rxjs";
@Component({
  selector: "app-observ-home",
  templateUrl: "./observ-home.component.html",
  styleUrls: ["./observ-home.component.css"]
})
export class ObservHomeComponent implements OnInit, OnDestroy {
  constructor() {}

  private firstObsSubscription: Subscription;
  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    let x = 1;
    const customObs = Observable.create(observable => {
      let x = 1;
      setInterval(() => {
        observable.next(x);
        if (x === 5) {
          observable.complete();
        }
        if (x >= 3) {
          // observable.error(new Error("Count is greater than 32"));
        }
        x += 1;
      }, 1000);
    });

    this.firstObsSubscription = customObs.subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log("Got Error ", error);
        alert(error.message);
      },
      () => {
        alert("Completed..");
      }
    );
  }
  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
