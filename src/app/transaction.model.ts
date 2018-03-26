import * as uuid from 'uuid';

enum TransactionType {
  incoming = 'Приход',
  expense = 'Расход',
}

export class Transaction {
  total: number;
  currency: string;
  sender: string;
  info: string;
  date: Date;
  type = 'transaction';

  id: string;

  constructor(params: Transaction) {
    this.total = params.total;
    this.currency = params.currency;
    this.sender = params.sender;
    this.info = params.info;
    this.date = params.date;
    this.id = uuid();
  }

  get title() {
    let message = this.getSymbol + ' ' + Math.abs(this.total) + this.currency;
    if (this.getType === TransactionType.incoming) message += ' от ' + this.sender;
    return message;
  }

  private get getType() {
    return this.total > 0 ? TransactionType.incoming : TransactionType.expense;
  }

  get getSymbol() {
    return this.getType === TransactionType.incoming ? '+' : '-';
  }

  get getDate() {
    return this.date.toISOString().slice(0, 10);
  }

}
