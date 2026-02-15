import { memo, useCallback, useLayoutEffect, useRef } from 'react';
import type { Category, Element } from '@/types';
import { CATEGORY_COLORS } from '@/constants';
import styles from'./ElementTile.module.css';

interface ElementProps {
  dimmed?: boolean;
  element: Element;
  isSelected: boolean;
  onSelectCategory: (category: Category) => void;
  onSelectElement: (element: Element) => void;
}

export const ElementTile = memo(function ElementTile({
  dimmed,
  element,
  isSelected,
  onSelectCategory,
  onSelectElement,
}: ElementProps) {
  const colors = CATEGORY_COLORS[element.category];

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    if (isSelected) {
      buttonRef.current?.focus();
    }
  }, [isSelected]);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onSelectCategory(element.category);
    onSelectElement(element);
  }, [element, onSelectCategory, onSelectElement]);

  return (
    <button
      className={styles.element}
      onClick={handleClick}
      ref={isSelected ? buttonRef : null}
      style={{
        backgroundColor: colors.backgroundColor,
        color: colors.color,
        gridColumn: element.group,
        gridRow: element.period,
        opacity: dimmed ? 0.25 : 1,
        outlineColor: colors.color,
      }}
    >
      <div className={styles.content} data-name={element.name} data-number={element.number}>
        <p className={styles.symbol}>{ element.symbol }</p>
      </div>
    </button>
  );
});
