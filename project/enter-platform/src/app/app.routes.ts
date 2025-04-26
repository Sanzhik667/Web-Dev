import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { SubjectListComponent } from './lessons/subject-list/subject-list.component';
import { TopicDetailComponent } from './lessons/topic-detail/topic-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent,title: 'Регистрация' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'lessons', component: SubjectListComponent, canActivate: [AuthGuard] },
  { path: 'lessons/:id', component: TopicDetailComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Должен быть последним
];