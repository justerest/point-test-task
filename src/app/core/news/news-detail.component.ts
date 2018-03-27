import { EventsService } from 'app/events.service';
import { News } from 'app/news.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {

  news: News;

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.eventsService.viewLinks[id]) {
      this.news = new News(<News>this.eventsService.viewLinks[id]);
    }
    else this.router.navigate(['/events']);
  }

  ngOnInit() {
  }

  get keys() {
    return Object.keys(this.news);
  }

  onSubmit() {
    this.markAsRead();
    this.router.navigate(['/events']);
  }

  private markAsRead() {
    this.news.isRead = true;
    this.eventsService.update(this.news);
  }

}
