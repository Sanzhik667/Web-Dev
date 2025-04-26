import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-topic-detail',
  standalone: true,
  imports: [CommonModule,FooterComponent,NavigationComponent],
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent {
  topic: string = '';
  lessonText: string = '';
  videoUrl: string = '';

  topics: { [key: number]: { title: string; text: string; video: string } } = {
    1: { title: 'Fractions', text: 'Lesson on fractions...', video: 'https://www.youtube.com/embed/1' },
    2: { title: 'Equations', text: 'Lesson on equations...', video: 'https://www.youtube.com/embed/2' },
    3: { title: 'Algorithms', text: 'Lesson on algorithms...', video: 'https://www.youtube.com/embed/3' },
  };
  

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const selectedTopic = this.topics[id];

    if (selectedTopic) {
      this.topic = selectedTopic.title;
      this.lessonText = selectedTopic.text;
      this.videoUrl = selectedTopic.video;
    }
  }
  
}

