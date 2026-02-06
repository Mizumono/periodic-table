import { elements } from '../../data';
import type { ElementData } from '../../types';
import type { Category } from '../../types/categories';
import { Element } from '../Element/Element';
import styles from'./PeriodicTable.module.css';

type PeriodicTableProps = {
  activeCategory: Category | null;
  onSelectCategory: (category: Category) => void;
  onSelectElement: (element: ElementData) => void;
};

export const PeriodicTable = ({ activeCategory, onSelectCategory, onSelectElement }: PeriodicTableProps) => {
  const sortedElements = [...elements].sort((a, b) => a.number - b.number);

  return (
    <div className={styles.periodicTable}>
      {
        sortedElements.map((element) => (
          <Element
            dimmed={activeCategory && element.category !== activeCategory}
            element={element}
            key={element.number}
            onSelectCategory={onSelectCategory}
            onSelectElement={onSelectElement}
          />
        ))
      }
    </div>
  );
};
