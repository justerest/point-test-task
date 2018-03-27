import { Component, OnInit } from '@angular/core';

import { News } from '../../news.model';
import { EventsService } from '../../events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss'],
})
export class NewsCreateComponent implements OnInit {

  news = new News;

  constructor(
    private eventsService: EventsService,
    private router: Router,
  ) { }

  ngOnInit() { }

  public save() {
    this.eventsService.create(this.news);
    this.router.navigate(['/events']);
  }

}
