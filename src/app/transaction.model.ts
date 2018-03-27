import * as uuid from 'uuid';

enum TransactionType {
  incoming = 'Приход',
  expense = 'Расход',
}

export class Transaction {
  total: number;
  currency = '';
  sender = '';
  info = '';
  date = new Date().toISOString().slice(0, 10);
  type: 'transaction' = 'transaction';

  id = uuid();

  constructor(params?: Transaction) {
    if (params) Object.assign(this, params);
  }

  get title() {
    return this.getTransactionType === TransactionType.incoming
      ? this.formatValue + ' от ' + this.sender
      : this.formatValue;
  }

  get formatValue() {
    return this.mathSign + ' ' + Math.abs(this.total) + this.currency;
  }

  get getTransactionType() {
    return this.total > 0 ? TransactionType.incoming : TransactionType.expense;
  }

  get mathSign() {
    return this.getTransactionType === TransactionType.incoming ? '+' : '-';
  }

}
