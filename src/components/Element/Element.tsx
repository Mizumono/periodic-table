import type { ElementData } from '../../types/index';
import { categoryColors } from './colors';
import styles from'./Element.module.css'

interface ElementProps {
  dimmed: boolean | null;
  element: ElementData;
}

export const Element = ({
  dimmed,
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
        opacity: dimmed ? 0.25 : 1,
      }}
    >
      <div className={styles.content} data-name={element.name} data-number={element.number}>
        <p className={styles.symbol}>{ element.symbol }</p>
      </div>
    </button>
  );
};
