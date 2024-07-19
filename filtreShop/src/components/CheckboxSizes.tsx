import React from 'react';
import Accordion from './ButtonOpen';

interface CheckboxProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({title, items, selectedItems, onItemChange }) => {
  return (
    <Accordion
    title={title}>
        <section style={{ display: 'grid', justifyContent: 'center', flexWrap: 'wrap', gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {items.map((item) => (
            <label key={item} style={{ margin: '5px' }}>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => onItemChange(item)}
                style={{display:'none'}}
              />
              <section style={{
            border: '2px solid #000000',
            borderRadius: '0px',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: selectedItems.includes(item) ? '3px' : '2px'
          }}>
              {item}
              </section>
            </label>
          ))}
        </section>
      </Accordion>
    );
};

export default Checkbox;
