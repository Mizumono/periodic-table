import './Element.css'

interface ElementProps {
  element: string;
  name: string;
  number: number;
}

export const Element = ({
  element,
  name,
  number
}: ElementProps) => {
  return (
    <button>
      <div data-name={name} data-number={number}>
        <p>{ element }</p>
      </div>
    </button>
  );
};
