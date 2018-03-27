import * as uuid from 'uuid';

export class News {
  title = '';
  content = '';
  date = new Date().toISOString().slice(0, 10);
  type: 'news' = 'news';

  id = uuid();
  isRead = false;

  constructor(params?: News) {
    if (params) Object.assign(this, params);
  }

}
