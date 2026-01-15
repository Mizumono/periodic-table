import type { Category } from '../../types/categories';

export const categoryColors: Record<
  Category,
  { backgroundColor: string; color: string }
> = {
  actinide: { backgroundColor: '#FFEADC', color: '#C73200' },
  alkali_metal: { backgroundColor: '#DBF8FF', color: '#00758C' },
  alkaline_earth_metal: { backgroundColor: '#FFEBEB', color: '#D60024' },
  lanthanide: { backgroundColor: '#E6F5FF', color: '#003355' },
  metalloid: { backgroundColor: '#FEF9E6', color: '#945700' },
  noble_gas: { backgroundColor: '#FFEBEE', color: '#CD1D5E' },
  post_transition_metal: { backgroundColor: '#DCF9EB', color: '#002C00' },
  reactive_nonmetal: { backgroundColor: '#E6F0FF', color: '#0060F0' },
  transition_metal: { backgroundColor: '#F5ECFD', color: '#6232EC' },
  unknown: { backgroundColor: '#E9E9EC', color: '#3F374F' },
};
