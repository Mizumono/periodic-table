import { elements } from '../../data';
import { Element } from '../Element/Element';
import styles from'./PeriodicTable.module.css'

export const PeriodicTable = () => (
  <div className={styles.periodicTable}>
    {
      elements.map((element) => (
        <Element element={element} key={element.number} />
      ))
    }
  </div>
);
