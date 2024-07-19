import React from 'react';
import Checkbox from './CheckboxBrands';

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, items, selectedItems, onItemChange}) => {
  return (
    <div>
      <Checkbox
          title={title}
           items={items}
           selectedItems={selectedItems}
           onItemChange={onItemChange}
         />
    </div>
  );
};

export default FilterSection;
