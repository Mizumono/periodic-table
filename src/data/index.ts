import type { Element } from '@/types';
import { actinides } from './actinides';
import { alkaliMetals } from './alkaliMetals';
import { alkalineEarthMetals } from './alkalineEarthMetals';
import { lanthanides } from './lanthanides';
import { metalloids } from './metalloids';
import { nobleGases } from './nobleGases';
import { postTransitionMetals } from './postTransitionMetals';
import { reactiveNonmetals } from './reactiveNonmetals';
import { transitionMetals } from './transitionMetals';
import { unknownChemicalProperties } from './unknownChemicalProperties';

export const elements: Element[] = [
  ...actinides,
  ...alkaliMetals,
  ...alkalineEarthMetals,
  ...lanthanides,
  ...metalloids,
  ...nobleGases,
  ...postTransitionMetals,
  ...reactiveNonmetals,
  ...transitionMetals,
  ...unknownChemicalProperties,
];
