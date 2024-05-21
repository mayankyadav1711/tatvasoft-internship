import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logintitle: string = 'Login';
  phoneImageUrl: string = 'https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/4957136_Mobile%20login.svg?alt=media&token=73336e6b-6cc5-4da1-bc24-8378a7c2d5bd';
  avatarImageUrl: string = 'https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/50994.jpg?alt=media&token=2c6f93a3-e74a-4219-9305-9d5a33815442';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    if (this.email && this.password) {
      // Handle the login logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Remember Me:', this.rememberMe);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
