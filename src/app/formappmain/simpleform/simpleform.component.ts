import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-simpleform",
  templateUrl: "./simpleform.component.html",
  styleUrls: ["./simpleform.component.css"]
})
export class SimpleformComponent implements OnInit {
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion = "pet";
  answer = "";
  genders = ["male", "female"];
  constructor() {}

  ngOnInit() {}
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    console.log(this.signupForm);
  }
  onReset() {
    this.signupForm.reset();
  }
}
