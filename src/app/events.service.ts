import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';

import { EVENTS } from './mock-events';
import { News } from './news.model';
import { Transaction } from './transaction.model';

@Injectable()
export class EventsService {

  view: (News | Transaction)[] = [];
  viewLinks: {[P in string]: News | Transaction} = {};

  constructor() { }

  async getEvents() {
    await of(EVENTS).subscribe(events => events.forEach(this.create.bind(this)));
  }

  sort(key: keyof News & keyof Transaction, isReverse = false) {
    this.view.sort(orderBy(key));
    if (isReverse) this.view.reverse();
  }

  create(event: News | Transaction) {
    const newEvent = createEvent(event);
    this.view.push(newEvent);
    this.viewLinks[newEvent.id] = newEvent;
  }

  delete(id: string) {
    const index = this.view.findIndex(event => event.id === id);
    if (index + 1) this.view.splice(index, 1);
    delete this.viewLinks[id];
  }

  update(event: News | Transaction) {
    if (this.viewLinks[event.id]) Object.assign(this.viewLinks[event.id], createEvent(event));
    else throw new Error('Event is not found:' + JSON.stringify(event));
  }

}

function createEvent(event: News | Transaction) {
  return event.type === 'news' ? new News(<any>event) : new Transaction(<any>event);
}

function orderBy(key) {
  return (a: News | Transaction, b: News | Transaction) => (
    a[key] > b[key] ? 1 :
      a[key] < b[key] ? -1 :
        0
  );
}
