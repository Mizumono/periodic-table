import { useRef, useState } from 'react';
import { ElementDetails, Filters, PeriodicTable } from '@/components';
import type { Category, Element } from '@/types';
import styles from './App.module.css';
import { elements } from './data';

const getDefaultElement = (): Element | null => elements.find(element => element.number === 1) || null;

function App() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedElement, setSelectedElement] = useState<Element | null>(window.innerWidth >= 768 ? getDefaultElement() : null);

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
        <ElementDetails
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
        />
      </div>
      <div className={styles.filtersWrapper}>
        <Filters activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      </div>
    </div>
  )
}

export default App
