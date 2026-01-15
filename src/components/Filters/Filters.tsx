import { CATEGORY_LABELS, type Category } from '../../types/categories';

type FiltersProps = {
  onSelectCategory: (category: Category | null) => void;
};

export const Filters = ({ onSelectCategory }: FiltersProps) => {
  return (
    <div>
      {
        Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <button key={key} onClick={() => onSelectCategory(key as Category)}>{label}</button>
        ))
      }
    </div>
  );
};
