import { useRef, useState } from 'react';
import { ElementDetails, Filters, PeriodicTable, Search } from '@/components';
import type { Category, Element } from '@/types';
import { elements } from '@/data';
import styles from './App.module.css';

const DEFAULT_ELEMENT: Element | null = elements.find(e => e.symbol === 'H') ?? null;
const isDesktop = window.matchMedia('(min-width: 768px)').matches;

function App() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedElement, setSelectedElement] = useState<Element | null>(isDesktop ? DEFAULT_ELEMENT : null);

  const appWrapperRef = useRef<HTMLDivElement>(null);

  const handleWrapperClick = () => {
    setActiveCategory(null);
  };

  return (
    <div className={styles.container} ref={appWrapperRef}>
      <div className={styles.content} onClick={handleWrapperClick}>
        <PeriodicTable
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectElement={setSelectedElement}
          searchTerm={searchTerm}
          selectedElement={selectedElement}
        />
        <ElementDetails
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
        />
      </div>
      <div className={styles.filtersWrapper}>
        <Search value={searchTerm} onChange={setSearchTerm} />
        <Filters activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      </div>
    </div>
  )
}

export default App
