import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  updateProfile(data: any) {
    return this.http.put('/api/profile', data);
  }

  logout() {
    return this.http.post('/api/logout', {});
  }
}