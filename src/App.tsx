import { useRef, useState } from 'react';
import { Filters } from './components/Filters/Filters';
import { PeriodicTable } from './components/PeriodicTable/PeriodicTable';
import type { Category } from './types/categories';
import styles from './App.module.css';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const appWrapperRef = useRef<HTMLDivElement>(null);

  const handleWrapperClick = () => {
    setActiveCategory(null); // bárhova kattint → reset
  };

  return (
    <div className={styles.appWrapper} onClick={handleWrapperClick} ref={appWrapperRef}>
      <PeriodicTable activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      <Filters onSelectCategory={setActiveCategory} />
    </div>
  )
}

export default App
