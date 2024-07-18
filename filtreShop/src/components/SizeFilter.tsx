import React from 'react';
import CheckboxSizes from './CheckboxSizes';

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string) => void;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FilterSectionSizes: React.FC<FilterSectionProps> = ({ title, items, selectedItems, onItemChange, isOpen, toggleOpen }) => {
  return (
    <div>
      <h2>
        {title}
        <button style={{marginLeft: '120px', backgroundColor: 'white'}} onClick={toggleOpen}>
          {isOpen ? '-' : '+'}
        </button>
      </h2>
      <CheckboxSizes
           items={items}
           selectedItems={selectedItems}
           onItemChange={onItemChange}
           isOpen={isOpen}
         />
    </div>
  );
};

export default FilterSectionSizes;