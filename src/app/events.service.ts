import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';

import { EVENTS } from './mock-events';
import { News } from './news.model';
import { Transaction } from './transaction.model';
import { AnyEvent } from './types';

@Injectable()
export class EventsService {

  view: (AnyEvent)[] = [];
  viewLinks: {[P in string]: AnyEvent} = {};

  orderKey: keyof AnyEvent = 'date';
  isReverse = false;

  constructor() { }

  get events() {
    const events = this.view.sort((a: AnyEvent, b: AnyEvent) => (
      a[this.orderKey] > b[this.orderKey] ? 1 :
        a[this.orderKey] < b[this.orderKey] ? -1 :
          0
    ));
    if (this.isReverse) events.reverse();
    return events;
  }

  async getEvents() {
    await of(EVENTS).subscribe(events => events.forEach(this.create.bind(this)));
  }

  create(event: AnyEvent) {
    const newEvent = createEvent(event);
    this.view.push(newEvent);
    this.viewLinks[newEvent.id] = newEvent;
  }

  delete(id: string) {
    const index = this.view.findIndex(event => event.id === id);
    if (index + 1) this.view.splice(index, 1);
    delete this.viewLinks[id];
  }

  update(event: AnyEvent) {
    if (this.viewLinks[event.id]) Object.assign(this.viewLinks[event.id], createEvent(event));
    else throw new Error('Event is not found:' + JSON.stringify(event));
  }

  changeSortingParams(orderKey: keyof AnyEvent, isChangeReverse = false) {
    this.orderKey = orderKey;
    if (isChangeReverse) this.isReverse = !this.isReverse;
  }

}

function createEvent(event: AnyEvent) {
  return event.type === 'news' ? new News(<any>event) : new Transaction(<any>event);
}
