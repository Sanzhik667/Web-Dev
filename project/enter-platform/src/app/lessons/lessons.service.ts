import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LessonsService {
  getSubjects(): Observable<string[]> {
    return of(['Математика', 'Физика', 'История']).pipe(delay(300));
  }

  getTopics(subject: string): Observable<string[]> {
    const mockTopics: Record<string, string[]> = {
      'Математика': ['Алгебра', 'Геометрия'],
      'Физика': ['Механика', 'Оптика'],
    };
    return of(mockTopics[subject] || []).pipe(delay(300));
  }
}