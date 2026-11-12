export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  currency: string;
  accountId: string;
  categoryId: string;
  type: TransactionType;
  payee: string;
  note?: string;
  userId: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'cash' | 'card' | 'savings' | 'custom';
  icon: string;
  userId: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  userId: string;
}
