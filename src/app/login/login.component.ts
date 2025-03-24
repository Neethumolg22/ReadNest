import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  
  LoginForm!: FormGroup;
  private mockUser = {
    email: 'user@gmail.com',
    password: '1234',
    token: 'mock-jwt-token'
  };

  constructor(
   
    private router: Router,private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
   
      username: new FormControl('', Validators.required),
      pswd: new FormControl('', Validators.required),

    });
  }

  onFormSubmit(){
    const { username, pswd } = this.LoginForm.value;
    if (username === this.mockUser.email && pswd === this.mockUser.password) {
      localStorage.setItem('token', this.mockUser.token);
      localStorage.setItem('user', username);   
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid Credentials. Try again!');
    }
  }

  onForgotPassword(){
    alert('Forgot password feature coming soon!');
  }

  onclick(){
    this.router.navigate(["/signup"]);
  }

  oncancel()
  {
    this.router.navigate(["/"]);
  }
}
