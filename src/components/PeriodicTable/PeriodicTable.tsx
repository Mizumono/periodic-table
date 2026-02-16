import { memo, useMemo } from 'react';
import type { Category, Element } from '@/types';
import { elements } from '@/data';
import { ElementTile } from '@/components';
import styles from'./PeriodicTable.module.css';

type PeriodicTableProps = {
  activeCategory: Category | null;
  onSelectCategory: (category: Category) => void;
  onSelectElement: (element: Element) => void;
  searchTerm: string;
  selectedElement: Element | null;
};

export const PeriodicTable = memo(function PeriodicTable({
  activeCategory,
  onSelectCategory,
  onSelectElement,
  searchTerm,
  selectedElement,
}: PeriodicTableProps) {
  const sortedElements = useMemo(() => [...elements].sort((a, b) => a.number - b.number), []);

  return (
    <div className={styles.periodicTable}>
      <div className={styles.content}>
        {
          sortedElements.map((element) => {
            const matchesCategory = !activeCategory || element.category === activeCategory;
            const matchesSearch =
              !searchTerm ||
              element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              element.symbol.toLowerCase().includes(searchTerm.toLowerCase());
            const dimmed = !(matchesCategory && matchesSearch);
            return (
              <ElementTile
                dimmed={dimmed}
                element={element}
                isSelected={selectedElement?.number === element.number}
                key={element.number}
                onSelectCategory={onSelectCategory}
                onSelectElement={onSelectElement}
              />
            )
          })
        }
      </div>
    </div>
  );
});
