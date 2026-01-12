import type { ElementData } from '../../types/index';
import { categoryColors } from './colors';
import styles from'./Element.module.css'

interface ElementProps {
  element: ElementData;
}

export const Element = ({
  element
}: ElementProps) => {
  const colors = categoryColors[element.category];

  return (
    <button
      className={styles.element}
      style={{
        backgroundColor: colors.backgroundColor,
        color: colors.color,
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
