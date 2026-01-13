import type { ElementData } from '../types';
import { alkaliMetals } from './alkaliMetals';
import { alkalineEarthMetals } from './alkalineEarthMetals';
import { lanthanides } from './lanthanides';
import { metalloids } from './metalloids';
import { nobleGases } from './nobleGases';
import { postTransitionMetals } from './postTransitionMetals';
import { reactiveNonmetals } from './reactiveNonmetals';
import { transitionMetals } from './transitionMetals';

export const elements: ElementData[] = [
  ...alkaliMetals,
  ...alkalineEarthMetals,
  ...lanthanides,
  ...metalloids,
  ...nobleGases,
  ...postTransitionMetals,
  ...reactiveNonmetals,
  ...transitionMetals,
];
