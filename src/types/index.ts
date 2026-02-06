import type { Category } from './categories';

export interface ElementData {
  category: Category;
  description?: string;
  group: number;
  name: string;
  number: number;
  period: number;
  symbol: string;
}
