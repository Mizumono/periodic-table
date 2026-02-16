import { memo} from 'react';
import styles from'./Search.module.css';

interface SearchProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const Search = memo(function Search({ value, onChange }: SearchProps) {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search by name or symbol...'
        type='text'
        value={value}
      />
    </div>
  );
});
