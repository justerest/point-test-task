import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';
import { AnyEvent } from '../types';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {

  isReverse = false;
  orderKey?: keyof AnyEvent;

  constructor(
    private eventsService: EventsService,
  ) { }

  async  ngOnInit() {
    if (!this.eventsService.view.length) await this.eventsService.getEvents();
  }

  get events() {
    return this.eventsService.events;
  }

  public sort(newOrderKey: keyof AnyEvent) {
    this.eventsService.changeSortingParams(newOrderKey, this.orderKey === newOrderKey);
    this.orderKey = newOrderKey;
  }

}
