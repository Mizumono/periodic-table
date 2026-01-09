import type { ElementData } from '../../types/index';
import { categoryColors } from './colors';
import './Element.css'

interface ElementProps {
  element: ElementData;
}

export const Element = ({
  element
}: ElementProps) => {
  const backgroundColor = categoryColors[element.category] || '#FFFFFF';

  return (
    <button
      style={{
        backgroundColor,
        gridColumn: element.group,
        gridRow: element.period,
      }}
    >
      <div data-name={element.name} data-number={element.number}>
        <p>{ element.symbol }</p>
      </div>
    </button>
  );
};
