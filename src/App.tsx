import { useRef, useState } from 'react';
import { ElementDetails } from './components/ElementDetails/ElementDetails';
import { Filters } from './components/Filters/Filters';
import { PeriodicTable } from './components/PeriodicTable/PeriodicTable';
import type { ElementData } from './types';
import type { Category } from './types/categories';
import styles from './App.module.css';
import { elements } from './data';

const getDefaultElement = (): ElementData | null => elements.find(element => element.number === 1) || null;

function App() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(getDefaultElement);

  const appWrapperRef = useRef<HTMLDivElement>(null);

  const handleWrapperClick = () => {
    setActiveCategory(null);
  };

  return (
    <div className={styles.container} onClick={handleWrapperClick} ref={appWrapperRef}>
      <div className={styles.content}>
        <PeriodicTable
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectElement={setSelectedElement}
          selectedElement={selectedElement}
        />

      </div>
      {/* <ElementDetails element={selectedElement} />
      <div className={styles.filtersWrapper}>
        <Filters activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      </div> */}
    </div>
  )
}

export default App
