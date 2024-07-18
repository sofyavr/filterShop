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
      )
);
};

export default Checkbox;
