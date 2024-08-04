import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.email, this.password, this.name).subscribe(
      response => {
        console.log('Registration successful', response);
      },
      error => {
        console.error('Registration error', error);
      }
    );
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
      },
      error => {
        console.error('Login error', error);
      }
    );
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login error', error);
      }
    );
  }
  
}
