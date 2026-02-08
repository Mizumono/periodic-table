import { CATEGORY_LABELS, type Category } from '../../types/categories';

type FiltersProps = {
  activeCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
};

export const Filters = ({ activeCategory, onSelectCategory }: FiltersProps) => (
  <fieldset>
    <legend>Filter elements by category</legend>
    {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
      const category = key as Category;

      return (
        <label key={key}>
          <input
            checked={activeCategory === category}
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
