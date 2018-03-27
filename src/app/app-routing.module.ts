import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListComponent } from './core/events-list.component';
import { NewsCreateComponent } from './core/news/news-create.component';
import { NewsDetailComponent } from './core/news/news-detail.component';
import { TransactionCreateComponent } from './core/transaction/transaction-create.component';
import { TransactionDetailComponent } from './core/transaction/transaction-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path: 'news-detail/:id', component: NewsDetailComponent },
  { path: 'transaction-detail/:id', component: TransactionDetailComponent },
  { path: 'news-create', component: NewsCreateComponent },
  { path: 'transaction-create', component: TransactionCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
