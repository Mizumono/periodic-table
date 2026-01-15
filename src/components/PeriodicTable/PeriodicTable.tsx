import { elements } from '../../data';
import type { Category } from '../../types/categories';
import { Element } from '../Element/Element';
import styles from'./PeriodicTable.module.css';

type PeriodicTableProps = {
  activeCategory: Category | null;
};

export const PeriodicTable = ({ activeCategory }: PeriodicTableProps) => (
  <div className={styles.periodicTable}>
    {
      elements.map((element) => (
        <Element
          dimmed={activeCategory && element.category !== activeCategory}
          element={element}
          key={element.number}
        />
      ))
    }
  </div>
);
