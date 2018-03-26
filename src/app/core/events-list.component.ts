import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from '../events.service';
import { News } from '../news.model';
import { SortingFunctions } from '../sorting-functions';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {

  isReverse = false;
  orderBy?: keyof typeof SortingFunctions;

  constructor(
    private eventsService: EventsService,
    private router: Router,
  ) { }

  async  ngOnInit() {
    if (!this.eventsService.events.length) await this.eventsService.getEvents();
  }

  get events() {
    return this.eventsService.events;
  }

  public select(event: News | Transaction) {
    this.eventsService.select(event);
    this.router.navigate([event.type + '-detail']);
  }

  public sort(orderBy: keyof typeof SortingFunctions) {
    if (this.orderBy === orderBy) this.isReverse = !this.isReverse;
    this.eventsService.sort(orderBy, this.isReverse);
    this.orderBy = orderBy;
  }

}
