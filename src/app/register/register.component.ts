import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registertitle = 'Register';
  phoneImageUrl: string = 'https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/20547283_6310505.svg?alt=media&token=4e7f5e7b-fbda-4d0f-ad43-3370ffee55c7';
  avatarImageUrl: string = 'https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/50994.jpg?alt=media&token=2c6f93a3-e74a-4219-9305-9d5a33815442';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  loading: boolean = false;


  onRegister() {
    if (this.email && this.password) {
      this.loading = true;
      setTimeout(() => {
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Remember Me:', this.rememberMe);

        // Stop the loading spinner
        this.loading = false;
      }, 2000);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
