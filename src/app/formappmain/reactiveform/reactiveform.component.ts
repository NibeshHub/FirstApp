import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControlName,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"]
})
export class ReactiveformComponent implements OnInit {
  genders: string[] = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUser = ["Ganga", "Dbasish"];
  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forBiddenUser.bind(this)
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmail
        )
      }),
      gender: new FormControl(null),
      hobbies: new FormArray([])
    });
    this.signupForm.statusChanges.subscribe(status => console.log(status));
  }
  onSubmit() {
    console.log(this.signupForm);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }
  forBiddenUser(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUser.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@gmail.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
