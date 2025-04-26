import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="nav-bar">
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/lessons" routerLinkActive="active">Lessons</a>
      <a routerLink="/profile" routerLinkActive="active">Profile</a>
    </nav>
  `,
  styles: [`
    .nav-bar {
      background: #1E2A47;
      padding: 1rem;
      display: flex;
      gap: 1rem;
    }
    a {
      color: #F5F5DC;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    a.active {
      background: #3A4F7A;
    }
  `]
})
export class NavigationComponent {}