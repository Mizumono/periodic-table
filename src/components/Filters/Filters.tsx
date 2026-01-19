import { CATEGORY_LABELS, type Category } from '../../types/categories';

type FiltersProps = {
  onSelectCategory: (category: Category | null) => void;
};

export const Filters = ({ onSelectCategory }: FiltersProps) => {
  const handleClick = (event: React.MouseEvent, category: Category) => {
    event.stopPropagation();

    onSelectCategory(category);
  }

  return (
    <div>
      {
        Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <button key={key} onClick={event => handleClick(event, key as Category)}>{label}</button>
        ))
      }
    </div>
  );
};
