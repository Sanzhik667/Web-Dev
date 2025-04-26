import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterModule } from '@angular/router';

interface Subject {
  id: number;
  name: string;
  icon: string;
  topics: Topic[];
}

interface Topic {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [CommonModule,NavigationComponent,FooterComponent, RouterModule],
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent {
  subjects = [
    {
      name: 'Математика',
      topics: [
        { id: 1, title: 'Дроби' },
        { id: 2, title: 'Уравнения' }
      ]
    },
    {
      name: 'Информатика',
      topics: [
        { id: 3, title: 'Алгоритмы' },
        { id: 4, title: 'HTML и CSS' }
      ]
    },
    {
      name: 'Грамотность чтения',
      topics: [
        { id: 5, title: 'Главная мысль текста' },
        { id: 6, title: 'Анализ текста' }
      ]
    },
    {
      name: 'История Казахстана',
      topics: [
        { id: 7, title: 'Казахское ханство' },
        { id: 8, title: 'Независимость' }
      ]
    },
    {
      name: 'Математическая грамотность',
      topics: [
        { id: 9, title: 'Задачи на логику' },
        { id: 10, title: 'Диаграммы и графики' }
      ]
    }
  ];


  selectedSubject: any = null;

  ngOnInit(): void {}

  selectSubject(subject: any): void {
    this.selectedSubject = subject;
  }
}