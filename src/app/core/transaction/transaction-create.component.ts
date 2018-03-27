import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from '../../events.service';
import { Transaction } from '../../transaction.model';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.scss'],
})
export class TransactionCreateComponent implements OnInit {

  transaction = new Transaction;

  constructor(
    private eventsService: EventsService,
    private router: Router,
  ) { }

  ngOnInit() { }

  public save() {
    this.eventsService.create(this.transaction);
    this.router.navigate(['/events']);
  }

}
