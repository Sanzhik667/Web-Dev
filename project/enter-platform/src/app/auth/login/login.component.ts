import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string | null = null;
  isLoading = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  onSubmit() {
    if (this.loginForm.invalid) return;
  
    this.error = null;
    this.isLoading = true;
  
    const { email, password } = this.loginForm.value;
    
    this.authService.login(email!, password!).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token); // Сохраняем токен
        this.router.navigate(['/home']); // Перенаправляем
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.error?.message || 'Ошибка входа';
        this.isLoading = false;
      }
    });
    
  }
  onRegisterClick(event: Event) {
    event.preventDefault();
    this.router.navigate(['/register']); // Явный переход
  }
}