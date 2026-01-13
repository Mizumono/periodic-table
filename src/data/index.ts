import type { ElementData } from '../types';
import { alkaliMetals } from './alkaliMetals';
import { alkalineEarthMetals } from './alkalineEarthMetals';
import { metalloids } from './metalloids';
import { postTransitionMetals } from './postTransitionMetals';
import { reactiveNonmetals } from './reactiveNonmetals';
import { transitionMetals } from './transitionMetals';

export const elements: ElementData[] = [
  ...alkaliMetals,
  ...alkalineEarthMetals,
  ...metalloids,
  ...postTransitionMetals,
  ...reactiveNonmetals,
  ...transitionMetals,
];
