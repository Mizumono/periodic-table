import type { ElementData } from '../types';
import { alkaliMetals } from './alkaliMetals';
import { alkalineEarthMetals } from './alkalineEarthMetals';
import { transitionMetals } from './transitionMetals';

export const elements: ElementData[] = [
  ...alkaliMetals,
  ...alkalineEarthMetals,
  ...transitionMetals,
];
