import type { Category } from './category';

export interface Element {
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
