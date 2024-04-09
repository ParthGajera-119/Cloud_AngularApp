import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: any) => { // Explicitly define the type of 'response' as 'any'
        if (response.message == "Login successful"){
          console.log('Login successful', response);
          this.router.navigate(['/home']);  
        }
        else{
          console.error('Login failed', response);
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
        // Here you would typically navigate the user to another route
      },
      // error: (error) => {
      //   console.error('Login failed', error);
      //   this.errorMessage = 'Login failed. Please check your credentials.';
      // }
    });
  }
}
