import { News } from './news.model';
import { Transaction } from './transaction.model';

export const SortingFunctions = {

  byDate(a: News | Transaction, b: News | Transaction) {
    return a.date.valueOf() - b.date.valueOf();
  },

  byType(a: News | Transaction, b: News | Transaction) {
    return (
      a.type > b.type ? 1 :
        a.type < b.type ? -1 :
          0
    );
  },

};
