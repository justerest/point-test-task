import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsListComponent } from './events-list.component';
import { EventsService } from '../events.service';
import { NewsDetailComponent } from './news-detail.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [EventsListComponent, NewsDetailComponent],
  providers: [EventsService],
})
export class CoreModule { }
