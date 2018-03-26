import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';

import { EVENTS } from './mock-events';
import { News } from './news.model';
import { SortingFunctions } from './sorting-functions';
import { Transaction } from './transaction.model';

@Injectable()
export class EventsService {

  events: (News | Transaction)[] = [];
  selectedEvent?: News | Transaction | null;

  constructor() { }

  async getEvents() {
    await of(EVENTS).subscribe(events => {
      this.events = events.map(event => createEvent(<any>event));
    });
  }

  sort(orderBy: keyof typeof SortingFunctions, isReverse = false) {
    this.events.sort(SortingFunctions[orderBy]);
    if (isReverse) this.events.reverse();
  }

  select(event: News | Transaction) {
    this.selectedEvent = event;
  }

  create(event: News | Transaction) {
    this.events.push(createEvent(event));
  }

  delete(id: string) {
    const index = this.events.findIndex(event => event.id === id);
    if (index + 1) this.events.splice(index, 1);
  }

}

function createEvent(event: News | Transaction) {
  return event.type === 'news' ? new News(<any>event) : new Transaction(<any>event);
}
