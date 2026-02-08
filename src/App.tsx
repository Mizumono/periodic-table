import { useRef, useState } from 'react';
import { ElementDetails } from './components/ElementDetails/ElementDetails';
import { Filters } from './components/Filters/Filters';
import { PeriodicTable } from './components/PeriodicTable/PeriodicTable';
import type { ElementData } from './types';
import type { Category } from './types/categories';
import styles from './App.module.css';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);

  const appWrapperRef = useRef<HTMLDivElement>(null);

  const handleWrapperClick = () => {
    setActiveCategory(null);
    setSelectedElement(null);
  };

  return (
    <div className={styles.appWrapper} onClick={handleWrapperClick} ref={appWrapperRef}>
      <PeriodicTable
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onSelectElement={setSelectedElement}
      />
      <ElementDetails element={selectedElement} />
      <Filters activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
    </div>
  )
}

export default App
