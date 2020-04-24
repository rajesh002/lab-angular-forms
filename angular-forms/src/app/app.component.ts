import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  fname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  isValidFormSubmitted = null;

  constructor() {}
  ngOnInit(): void {
    this.fname = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.lastname = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}$'),
    ]);
    this.myForm = new FormGroup({
      fname: this.fname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
    });
  }

  onSubmit() {
    this.isValidFormSubmitted = false;
    if (this.myForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    alert(
      'Form Submitted succesfully!!!\n Check the values in browser console.'
    );
    this.myForm.reset();
  }
}
