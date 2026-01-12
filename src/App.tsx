import { Element } from './components/Element/Element'
import { elements } from './data/index'
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.periodicTable}> 
      {
        elements.map((element) => <Element element={element} key={element.number} />)
      }
    </div>
  )
}

export default App
