import React from 'react';
import CheckboxColor from './CheckboxColor';

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string) => void;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FilterSectionColor: React.FC<FilterSectionProps> = ({ title, items, selectedItems, onItemChange, isOpen, toggleOpen }) => {
  return (
    <div>
      <h2>
        {title}
        <button style={{marginLeft: '205px', backgroundColor: 'white'}} onClick={toggleOpen}>
          {isOpen ? '-' : '+'}
        </button>
      </h2>
      <CheckboxColor
           items={items}
           selectedItems={selectedItems}
           onItemChange={onItemChange}
           isOpen={isOpen}
         />
    </div>
  );
};

export default FilterSectionColor;