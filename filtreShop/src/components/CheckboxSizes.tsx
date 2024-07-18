import React from 'react';

interface CheckboxProps {
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string) => void;
  isOpen: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ items, selectedItems, onItemChange, isOpen }) => {
  return (
    isOpen && (
        <section style={{ display: 'grid', justifyContent: 'center', flexWrap: 'wrap', gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {items.map((item) => (
            <label key={item} style={{ marginBottom: '5px' }}>
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
            borderWidth: selectedItems.includes(item) ? '3px' : '2px',

          }}>
              {item}
              </section>
            </label>
          ))}
        </section>
      )
);
};

export default Checkbox;
