import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  newTask = '';
  tasks: { text: string; completed: boolean }[] = [];

  ngOnInit(): void {
    this.loadTasks();
  }

  addTask(): void {
    const text = this.newTask.trim();
    if (text === '') return;

    this.tasks.push({ text, completed: false });
    this.newTask = '';
    this.saveTasks();
  }

  deleteTask(task: { text: string; completed: boolean }): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks(): void {
    const saved = localStorage.getItem('tasks');
    this.tasks = saved ? JSON.parse(saved) : [];
  }
}
