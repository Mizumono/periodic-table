import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/constants';
import type { Category } from '@/types';
import a11y from '../../styles/a11y.module.css';
import styles from './Filters.module.css';

type FiltersProps = {
  activeCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
};

export const Filters = ({ activeCategory, onSelectCategory }: FiltersProps) => (
  <fieldset className={styles.filters}>
    <legend className={a11y.srOnly}>Filter elements by category</legend>
    {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
      const category = key as Category;

      return (
        <label
          className={`${styles.filter} ${activeCategory === category ? styles.active : ''}`}
          key={key}
          style={{
            '--category-color': CATEGORY_COLORS[category].color,
            '--category-background-color': CATEGORY_COLORS[category].backgroundColor,
          } as React.CSSProperties}
        >
          <input
            checked={activeCategory === category}
            className={a11y.srOnly}
            name="elementCategory"
            onChange={() => onSelectCategory(category)}
            type="radio"
            value={category}
          />
          {label}
        </label>
      );
    })}
  </fieldset>
);
