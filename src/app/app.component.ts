import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  calculatorList,
  MyCalculatorBase,
  MyFirstCalculator,
  MySecondCalculator,
} from "./Services/FactoryServices";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @ViewChild("f", { static: false }) signupForm: NgForm;

  defaultQuestion = "teacher";
  answer = "";
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  submitted = false;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    const myFirstCalculator: MyFirstCalculator =
      this.getService("MyFirstCalculator");
    const mySecondCalculator: MySecondCalculator =
      this.getService("MySecondCalculator");

    console.log("MyFirstCalculator: ", myFirstCalculator.calculate(50, 100));
    console.log("MySecondCalculator: ", mySecondCalculator.calculate(50, 100));
  }

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  getService(type: string): MyCalculatorBase {
    return this.injector.get(calculatorList.get(type));
  }
}
