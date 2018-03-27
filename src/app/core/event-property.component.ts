import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-property',
  templateUrl: './event-property.component.html',
  styleUrls: ['./event-property.component.scss'],
})
export class EventPropertyComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;
  @Input() inputType?: 'textBlock' | 'numberBlock' | 'textareaBlock';

  inputBlock: TemplateRef<any>;

  @ViewChild('textBlock')
  textBlock: TemplateRef<any>;
  @ViewChild('numberBlock')
  numberBlock: TemplateRef<any>;
  @ViewChild('textareaBlock')
  textareaBlock: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    if (this.inputType) this.inputBlock = this[this.inputType];
  }

}
