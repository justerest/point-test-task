import { Component, OnInit } from '@angular/core';

import { News } from '../../news.model';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss'],
})
export class NewsCreateComponent implements OnInit {

  news = new News;

  constructor() { }

  ngOnInit() {
  }

}
