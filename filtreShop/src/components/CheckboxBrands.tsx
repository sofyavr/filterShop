import React from 'react';
import Accordion from './ButtonOpen';

interface CheckboxProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ title, items, selectedItems, onItemChange }) => {
  return (
    <Accordion
    title={title}>
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((item) => (
          <label key={item} style={{ marginBottom: '5px' }}>
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => onItemChange(item)}
            />
            {item}
          </label>
        ))}
      </section>
    </Accordion>
  );
};

export default Checkbox;
