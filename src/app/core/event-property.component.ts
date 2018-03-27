import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-property',
  templateUrl: './event-property.component.html',
  styleUrls: ['./event-property.component.scss'],
})
export class EventPropertyComponent implements OnInit {

  @Input() label = '';
  @Input() value = '';

  constructor() { }

  ngOnInit() { }

}
