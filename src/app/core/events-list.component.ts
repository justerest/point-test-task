import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';
import { News } from '../news.model';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {

  isReverse = false;
  orderBy?: keyof News & keyof Transaction;

  constructor(
    private eventsService: EventsService,
  ) { }

  async  ngOnInit() {
    if (!this.eventsService.view.length) await this.eventsService.getEvents();
  }

  get events() {
    return this.eventsService.view;
  }

  public sortBy(orderBy: EventsListComponent['orderBy']) {
    if (this.orderBy === orderBy) this.isReverse = !this.isReverse;
    this.eventsService.sort(orderBy, this.isReverse);
    this.orderBy = orderBy;
  }

}
