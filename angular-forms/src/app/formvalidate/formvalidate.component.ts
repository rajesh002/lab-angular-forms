import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidate',
  templateUrl: './formvalidate.component.html',
  styleUrls: ['./formvalidate.component.css'],
})
export class FormvalidateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// this.registerForm = this.formBuilder.group({
//   firstName: ['', Validators.required],
//   lastName: ['', Validators.required],
//   email: [
//     '',
//     [
//       Validators.required,
//       Validators.pattern(
//         /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/
//       ),
//     ],
//   ],
//   password: ['', [Validators.required, Validators.minLength(6)]],
// });
// }
// get f() {
// return this.registerForm.controls;
// }
// onSubmit() {
// this.submitted = true;
// // stop here if form is invalid
// if (this.registerForm.invalid) {
//   return;
// }
// // this.myRegForm.resetForm();
// this.submitted = false;
// // this.toastr.success('Registration Successfull');
