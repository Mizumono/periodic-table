import { elements } from '../../data';
import type { Category, Element } from '@/types';
import { ElementTile } from '@/components';
import styles from'./PeriodicTable.module.css';

type PeriodicTableProps = {
  activeCategory: Category | null;
  onSelectCategory: (category: Category) => void;
  onSelectElement: (element: Element) => void;
  selectedElement: Element | null;
};

export const PeriodicTable = ({
  activeCategory,
  onSelectCategory,
  onSelectElement,
  selectedElement,
}: PeriodicTableProps) => {
  const sortedElements = [...elements].sort((a, b) => a.number - b.number);

  return (
    <div className={styles.periodicTable}>
      <div className={styles.content}>
        {
          sortedElements.map((element) => (
            <ElementTile
              dimmed={activeCategory && element.category !== activeCategory}
              element={element}
              isSelected={selectedElement?.number === element.number}
              key={element.number}
              onSelectCategory={onSelectCategory}
              onSelectElement={onSelectElement}
            />
          ))
        }
      </div>
    </div>
  );
};
