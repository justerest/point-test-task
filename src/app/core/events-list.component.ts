import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';
import { SortingFunctions } from '../sorting-functions';

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
  ) { }

  async  ngOnInit() {
    if (!this.eventsService.events.length) await this.eventsService.getEvents();
  }

  get events() {
    return this.eventsService.events;
  }

  public sort(orderBy: keyof typeof SortingFunctions) {
    if (this.orderBy === orderBy) this.isReverse = !this.isReverse;
    this.eventsService.sort(orderBy, this.isReverse);
    this.orderBy = orderBy;
  }

}
