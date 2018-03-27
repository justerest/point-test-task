import { EventsService } from 'app/events.service';
import { Transaction } from 'app/transaction.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent implements OnInit {

  transaction?: Transaction;

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.eventsService.viewLinks[id]) {
      this.transaction = new Transaction(<Transaction>this.eventsService.viewLinks[id]);
    }
    else this.router.navigate(['/events']);
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.transaction) this.eventsService.delete(this.transaction.id);
    this.router.navigate(['/events']);
  }

}
