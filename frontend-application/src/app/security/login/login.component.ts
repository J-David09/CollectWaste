import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  showError = false;

  user: User = {
    userName: '',
    password: ''
  };


  login() {
    this.authService.login(this.user).subscribe(response => {
      if (response) {
        this.showError = false;
        this.user = response;
        localStorage.setItem('id', this.user.id?.toString() || "");
        localStorage.setItem('name', this.user.name?.toString() || "");
        localStorage.setItem('userName', this.user.userName?.toString() || "");
        localStorage.setItem('role', this.user.role?.toString() || "");
        if(this.user.role == 1) {
          this.router.navigate(["/adminHome"]);
        } else {
          this.router.navigate(["/home"]);
        }
        
      } else {
        this.showError = true;
      }
    })
  }
}
