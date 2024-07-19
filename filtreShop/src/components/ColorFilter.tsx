import React from 'react';
import CheckboxColor from './CheckboxColor';

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string) => void;
}

const FilterSectionColor: React.FC<FilterSectionProps> = ({ title, items, selectedItems, onItemChange}) => {
  return (
    <div>
      <CheckboxColor
            title={title}
           items={items}
           selectedItems={selectedItems}
           onItemChange={onItemChange}
         />
    </div>
  );
};

export default FilterSectionColor;