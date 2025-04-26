import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // Django API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/auth/login/`, 
      { email, password }
    ).pipe(
      tap(response => {
        // Сохраняем токен в localStorage
        localStorage.setItem('auth_token', response.token);
      })
    );
  }

  register(userData: { 
    email: string; 
    username: string;
    password: string;
    password2: string; // 👈 обязательно добавь этот параметр
  }): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/auth/register/`, 
      userData
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}
