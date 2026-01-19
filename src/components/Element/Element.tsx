import type { Category } from '../../types/categories';
import type { ElementData } from '../../types/index';
import { categoryColors } from './colors';
import styles from'./Element.module.css'

interface ElementProps {
  dimmed: boolean | null;
  element: ElementData;
  onSelectCategory: (category: Category) => void;
}

export const Element = ({
  dimmed,
  element,
  onSelectCategory
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
      onClick={() => onSelectCategory(element.category)}
    >
      <div className={styles.content} data-name={element.name} data-number={element.number}>
        <p className={styles.symbol}>{ element.symbol }</p>
      </div>
    </button>
  );
};
