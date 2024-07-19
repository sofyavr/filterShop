import React from 'react';
import CheckboxSizes from './CheckboxSizes';

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string) => void;
}

const FilterSectionSizes: React.FC<FilterSectionProps> = ({ title, items, selectedItems, onItemChange}) => {
  return (
    <div>
      <CheckboxSizes
          title={title}
           items={items}
           selectedItems={selectedItems}
           onItemChange={onItemChange}
         />
    </div>
  );
};

export default FilterSectionSizes;