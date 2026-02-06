import type { ElementData } from '../../types';

interface ElementDetailsProps {
  element: ElementData | null;
}

export const ElementDetails = ({ element }: ElementDetailsProps) => {
  return (
    <div>
      <h2>{element?.name}</h2>
    </div>
  );
};
