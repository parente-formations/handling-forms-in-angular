import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // https://www.htmlelements.com/docs/angular-template-driven-forms-validator/

  @ViewChild("f", { static: false }) signupForm: NgForm;

  optionsSubscription = [
    { value: "basic", label: "Basic" },
    { value: "advanced", label: "Advanced" },
    { value: "pro", label: "Pro" },
  ];

  defaultSubscription = this.optionsSubscription[1].value;
  submitted: boolean = false;

  onSubmit() {
    console.log(this.signupForm.value);
    this.resetForm();
  }

  private resetForm() {
    this.signupForm.reset();

    this.signupForm.form.patchValue({
      subscription: this.defaultSubscription,
    });
  }
}
