import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signuppage',
  imports: [ReactiveFormsModule],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.scss'
})
export class SignuppageComponent {
  LoginForm!: FormGroup;
  successMessage:any;
  Reenterpassword:any;
  password:any;
  constructor(
   
    private router: Router,private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: new FormControl('', Validators.required),
      pswd: new FormControl('', Validators.required),
      conpswd: new FormControl('', Validators.required),

    });
  }
  onFormSubmit(){
    if (this.LoginForm.valid) {
        alert( 'User successfully created!');
       
        this.LoginForm.reset();
        this.router.navigate(['/home']);
    } else {
     alert( 'Please fill all required fields!');
    }
  }
  get f() { return this.LoginForm.controls; }

  confirmPasswordMessage() {
    this.password = (this.LoginForm.controls['pswd'].value == null ? "" : this.LoginForm.controls['pswd'].value);
    this.Reenterpassword = (this.LoginForm.controls['conpswd'].value == null ? "" : this.LoginForm.controls['conpswd'].value);
    if (this.password != this.Reenterpassword) {

      debugger

   alert('Confirm Password doesnot match with password');


      return;
    }
  }
  onForgotPassword(){
    alert('Forgot password feature coming soon!');
  }
  onCancel(){
    this.router.navigate(["/"]);
  }
}
