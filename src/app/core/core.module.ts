import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { EventPropertyComponent } from './event-property.component';
import { EventsListComponent } from './events-list.component';
import { NewsCreateComponent } from './news/news-create.component';
import { NewsDetailComponent } from './news/news-detail.component';
import { TransactionCreateComponent } from './transaction/transaction-create.component';
import { TransactionDetailComponent } from './transaction/transaction-detail.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EventsListComponent,
    NewsDetailComponent,
    TransactionDetailComponent,
    EventPropertyComponent,
    NewsCreateComponent,
    TransactionCreateComponent,
  ],
  providers: [],
})
export class CoreModule { }
