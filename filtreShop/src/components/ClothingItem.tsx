import React from 'react';
import  ClothingItem from './interfaces';

interface ClothingItemProps {
  item: ClothingItem;
}

const ClothingItems: React.FC<ClothingItemProps> = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Brand: {item.brand}</p>
      <p>Size: {item.size}</p>
      <p>Color: {item.color}</p>
    </div>
  );
};

export default ClothingItems;
