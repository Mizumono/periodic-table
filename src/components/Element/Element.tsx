import { useEffect, useRef } from 'react';
import type { Category } from '../../types/categories';
import type { ElementData } from '../../types/index';
import { categoryColors } from './colors';
import styles from'./Element.module.css'

interface ElementProps {
  dimmed: boolean | null;
  element: ElementData;
  isSelected: boolean;
  onSelectCategory: (category: Category) => void;
  onSelectElement: (element: ElementData) => void;
}

export const Element = ({
  dimmed,
  element,
  isSelected,
  onSelectCategory,
  onSelectElement,
}: ElementProps) => {
  const colors = categoryColors[element.category];

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if(isSelected) {
      buttonRef.current?.focus();
    }
  }, [isSelected]);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    onSelectCategory(element.category);
    onSelectElement(element);
  }

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
};
