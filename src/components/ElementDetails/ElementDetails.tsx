import type { ElementData } from '../../types';
import styles from'./ElementDetails.module.css'

interface ElementDetailsProps {
  element: ElementData | null;
}

const renderDetail = (label: string, value: string | number | undefined) => (
    <>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </>
);

export const ElementDetails = ({ element }: ElementDetailsProps) => {
  return (
    <div className={styles.dialog}>
      <h2 className={styles.elementName}>{element?.name}</h2>
      <p className={styles.description}>{element?.description}</p>
      <dl className={styles.detailsList}>
        {element?.atomicMass && renderDetail('Atomic mass', `${element.atomicMass} u`)}
        {element?.meltingPoint && renderDetail('Melting', `${element.meltingPoint} °C`)}
        {element?.boilingPoint && renderDetail('Boiling', `${element.boilingPoint} °C`)}
        {element?.discoveredBy && renderDetail('Discovered by', element.discoveredBy)}
        {element?.discoveryYear && renderDetail('Year of discovery', element.discoveryYear)}
      </dl>
    </div>
  );
};
