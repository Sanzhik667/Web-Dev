import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { TodoComponent } from '../todo/todo.component';
import { FooterComponent } from '../shared/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,NavigationComponent,TodoComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
