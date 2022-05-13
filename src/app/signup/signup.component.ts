import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  gender = ['male','female','other'];
  hobby = ['Singer','cricket','other'];
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }
   createForm(){
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender:['',Validators.required],
      email: ['', [Validators.required , Validators.email]],
      hobby:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, ]]
  },{validator: this.MustMatch('password','confirmPassword')});
   }
  // convenience getter for easy access to form fields
   get f() { return this.form.controls; }

   MustMatch(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  onSubmit() {
      this.submitted = true;

      console.log(this.form)

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }
      localStorage.setItem('User',JSON.stringify(this.form.value))
      // success route on login page 
      this.router.navigate(['login']);
      
  }
}
