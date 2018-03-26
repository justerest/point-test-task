import * as uuid from 'uuid';

export class News {
  title: string;
  content: string;
  date: Date;
  type = 'news';

  id: string;

  constructor(params: News) {
    this.title = params.title;
    this.content = params.content;
    this.date = params.date;
    this.id = uuid();
  }

  get getDate() {
    return this.date.toISOString().slice(0, 10);
  }

}
