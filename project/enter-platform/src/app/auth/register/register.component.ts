import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  error: string | null = null;
  isLoading = false;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).+$/)
    ]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {
    validators: this.passwordMatchValidator as any
  } as AbstractControlOptions);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.error = 'Пожалуйста, заполните все поля правильно';
      return;
    }

    this.error = null;
    this.isLoading = true;

    const formValue = this.registerForm.value;

    this.authService.register({
      email: formValue.email || '',
      username: formValue.username || '',
      password: formValue.password || '',
      password2: formValue.confirmPassword || ''
    }).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token); // сохраняем токен, если API возвращает его
        this.router.navigate(['/profile']);
      },
      error: (err: any) => {
        this.error = err.error?.email?.[0] || err.error?.username?.[0] || err.message || 'Ошибка регистрации';
        this.isLoading = false;
      }
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
