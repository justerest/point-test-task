import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from '../events.service';
import { News } from '../news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {

  news?: News;

  constructor(
    private router: Router,
    eventsService: EventsService,
  ) {
    if (eventsService.selectedEvent) this.news = <News>eventsService.selectedEvent;
    else router.navigate(['/events']);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/events']);
  }

}
