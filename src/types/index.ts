import type { Category } from './categories';

export interface ElementData {
  atomicMass?: number;
  boilingPoint?: number;
  category: Category;
  description?: string;
  discoveredBy?: string;
  discoveryYear?: number;
  group: number;
  meltingPoint?: number;
  name: string;
  number: number;
  period: number;
  symbol: string;
}
