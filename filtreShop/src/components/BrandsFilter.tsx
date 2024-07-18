import React from 'react';
import Checkbox from './CheckboxBrands';

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string) => void;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, items, selectedItems, onItemChange, isOpen, toggleOpen }) => {
  return (
    <div>
      <h2>
        {title}
        <button style={{marginLeft: '199px', backgroundColor: 'white'}} onClick={toggleOpen}>
          {isOpen ? '-' : '+'}
        </button>
      </h2>
      <Checkbox
           items={items}
           selectedItems={selectedItems}
           onItemChange={onItemChange}
           isOpen={isOpen}
         />
    </div>
  );
};

export default FilterSection;
