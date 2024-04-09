import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userData = {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: ''
  };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signup() {
    this.authService.signup(this.userData).subscribe({
      next: (response : any) => {
        if (response.message == "Signup successful"){
          this.router.navigate(['/login']);  
        }
        else{
          console.error('Signup failed', response);
          this.errorMessage = 'Signup failed. Please check all the values';
        }
      }


      //   console.log('Signup successful', response);
      //   this.successMessage = 'User successfully registered.'; // Set success message
      //   this.errorMessage = ''; // Clear any previous error message
      //   // Optional: navigate to login or clear form here
      //   this.router.navigate(['/login']); // Navigate to login on successful signup
      // },
      // error: (error) => {
      //   console.error('Signup failed', error);
      //   this.errorMessage = 'Signup failed. Please check your input.';
      //   this.successMessage = ''; // Clear any previous success message
      // }
    });
  }
}
