import { memo, useCallback } from 'react';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/constants';
import type { Category } from '@/types';
import a11y from '../../styles/a11y.module.css';
import styles from './Filters.module.css';

type FiltersProps = {
  activeCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
};

export const Filters = memo(function Filters({ activeCategory, onSelectCategory }: FiltersProps) {
  const handleChange = useCallback(
    (category: Category) => () => onSelectCategory(category),
    [onSelectCategory]
  );

  const entries = Object.entries(CATEGORY_LABELS) as [Category, string][];
  
  return (
    <fieldset className={styles.filters}>
      <legend className={a11y.srOnly}>Filter elements by category</legend>
      {entries.map(([category, label]) => (
        <label
          className={`${styles.filter} ${activeCategory === category ? styles.active : ''}`}
          key={category}
          style={{
            '--category-color': CATEGORY_COLORS[category].color,
            '--category-background-color': CATEGORY_COLORS[category].backgroundColor,
          } as React.CSSProperties}
        >
          <input
            checked={activeCategory === category}
            className={a11y.srOnly}
            name="elementCategory"
            onChange={handleChange(category)}
            type="radio"
            value={category}
          />
          {label}
        </label>
      ))}
    </fieldset>
  );
});
