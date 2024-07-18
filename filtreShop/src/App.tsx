import React, { useState } from 'react';
import ClothingItem from './components/interfaces';
import FilterSection from './components/BrandsFilter'
import FilterSectionSizes from './components/SizeFilter'
import FilterSectionColor from './components/ColorFilter'


const clothingItems: ClothingItem[] = [
  { id: 1, brand: 'STATE', size: 'OSFA', name: 'Платье STATE OSFA', color:'green' },
  { id: 2, brand: 'COOPER', size: 'W26', name: 'Футболка COOPER W26', color:'beige' },
  { id: 3, brand: 'BARDOT', size: 'W28', name: 'Джинсы BARDOT W28', color:'darkblue' },
  { id: 4, brand: 'ALFANI', size: 'W30', name: 'Юбка ALFANI W30', color:'violet' },
  { id: 5, brand: 'CECE', size: 'W32', name: 'Куртка CECE W32', color:'black' },
];

const Brands = ['STATE', 'COOPER', 'BARDOT', 'ALFANI', 'CECE', 'DONNA RICCO'];
const sizes = ['OSFA', 'W26', 'W27', 'W28', 'W29', 'W30', 'W31', 'W32', 'W33', 'W34', 'W35', 'W36', 'W38', 'W40', 'W42', 'W44', 'W46', 'W48', 'W50', 'W52',];
const colors = ['black', 'beige', 'darkblue', 'green', 'violet', 'lightgrey','darkgrey', 'red', 'yellow', 'brown', 'pink', 'aquamarine'];

const ShopPage: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [isBrandFilterOpen, setIsBrandFilterOpen] = useState<boolean>(true);
  const [isSizeFilterOpen, setIsSizeFilterOpen] = useState<boolean>(true);
  const [isColorFilterOpen, setIsColorFilterOpen] = useState<boolean>(true);

  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleColorChange = (color: string) => {
    if (selectedColor.includes(color)) {
      setSelectedColor(selectedColor.filter((b) => b !== color));
    } else {
      setSelectedColor([...selectedColor, color]);
    }
  };

  const filteredItems = clothingItems.filter(
    (item) =>
      (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
    (selectedColor.length === 0 || selectedColor.includes(item.color)) &&
      (!selectedSize || item.size === selectedSize)
  );

  return (
    <div className='container' style={{position: 'absolute', top: 0, backgroundColor: '#ffffff', color: '#000000', padding: '20px' }}>
    <aside style={{ float: 'left', borderRight:'solid', borderRightColor:'gray' }}>        
    <FilterSection
           title="Brand"
           items={Brands}
           selectedItems={selectedBrands}
           onItemChange={handleBrandChange}
           isOpen={isBrandFilterOpen}
           toggleOpen={() => setIsBrandFilterOpen(!isBrandFilterOpen)}
         />
          <FilterSectionSizes 
            title="Size (Inches)"
            items={sizes}
            selectedItems={[selectedSize || '']}
            onItemChange={(size) => setSelectedSize(size === selectedSize ? null : size)}
            isOpen={isSizeFilterOpen}
            toggleOpen={() => setIsSizeFilterOpen(!isSizeFilterOpen)}
         />
         <FilterSectionColor
            title="Color"
            items={colors}
            selectedItems={selectedColor}
            onItemChange={handleColorChange}
            isOpen={isColorFilterOpen}
            toggleOpen={() => setIsColorFilterOpen(!isColorFilterOpen)}
         />
      </aside>
        <section style={{float: 'right'}}>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        </section>
    </div>
  );
};

export default ShopPage;

