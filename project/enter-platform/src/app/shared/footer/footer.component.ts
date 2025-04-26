import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>ENTer</h3>
          <p>Educational platform for UNT preparation</p>
</div>

<div class="footer-section">
  <h4>Contacts</h4>
  <p>Email: infoemailenter-platform.kz</p>
  <p>Phone: +7 778 359 7014</p>
</div>

<div class="footer-section">
  <h4>Quick Links</h4>
  <a routerLink="/home">Home</a>
  <a routerLink="/lessons">Lessons</a>
  <a routerLink="/profile">Profile</a>
</div>
      </div>
      
      <div class="footer-bottom">
        <p>© 2023 ENTer Platform. Все права защищены.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #1E2A47;
      color: #F5F5DC;
      padding: 2rem 0 0;
      margin-top: auto;
    }
    
    .footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .footer-section {
      flex: 1;
      min-width: 250px;
      margin-bottom: 2rem;
      padding: 0 1rem;
      
      h3, h4 {
        color: #F5F5DC;
        margin-bottom: 1rem;
      }
      
      p, a {
        color: rgba(245, 245, 220, 0.7);
        margin: 0.5rem 0;
        display: block;
      }
      
      a {
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: #F5F5DC;
        }
      }
    }
    
    .footer-bottom {
      text-align: center;
      padding: 1rem;
      border-top: 1px solid rgba(245, 245, 220, 0.1);
      color: rgba(245, 245, 220, 0.5);
      font-size: 0.9rem;
    }
  `]
})
export class FooterComponent {}