import type { ElementData } from '../types';
import { alkaliMetals } from './alkaliMetals';
import { alkalineEarthMetals } from './alkalineEarthMetals';

export const elements: ElementData[] = [
  ...alkaliMetals,
  ...alkalineEarthMetals,
];
