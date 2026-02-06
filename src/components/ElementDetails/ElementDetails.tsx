import type { ElementData } from '../../types';
import styles from'./ElementDetails.module.css'

interface ElementDetailsProps {
  element: ElementData | null;
}

export const ElementDetails = ({ element }: ElementDetailsProps) => {
  return (
    <div className={styles.dialog}>
      <h2 className={styles.elementName}>{element?.name}</h2>
      <p className={styles.description}>{element?.description}</p>
    </div>
  );
};
