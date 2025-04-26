import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';

interface User {
  name: string;
  username: string;
  age: number;
  city: string;
  education: string;
  interests: string;
  avatarUrl?: string;
  achievements: {
    courses: number;
    certificates: number;
    tests: number;
  };
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: User = {
    name: 'Ералы Санжар',
    username: 'Sanzhar',
    age: 20,
    city: 'Алматы',
    education: 'Kazakh-British Technical University',
    interests: 'WEB-developmen',
    avatarUrl: 'https://www.google.com/url?sa=i&url=htthttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznaSV1gK1RabnW7veR3B6ABBza4COPq6mFA&sps%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fstudent-cartoon&psig=AOvVaw2tQAvveBqyFCSU4tVa7f2n&ust=1745185806923000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDc1POJ5YwDFQAAAAAdAAAAABAE',
    achievements: {
      courses: 5,
      certificates: 3,
      tests: 15
    }
  };

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {}

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      width: '500px',
      data: { ...this.user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = { ...this.user, ...result };
        console.log('Профиль обновлен:', this.user);
      }
    });
  }

  changeAvatar(): void {
    console.log('Инициирована смена аватара');
  }

  logout(): void {
    if (confirm('Вы уверены, что хотите выйти?')) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
}