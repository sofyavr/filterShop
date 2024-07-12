import React, { useState } from 'react';

interface ClothingItem {
  id: number;
  brand: string;
  size: string;
  name: string;
  color: string;
}

const clothingItems: ClothingItem[] = [
  { id: 1, brand: 'STATE', size: 'OSFA', name: 'Платье STATE OSFA', color:'green' },
  { id: 2, brand: 'COOPER', size: 'W26', name: 'Футболка COOPER W26', color:'beige' },
  { id: 3, brand: 'BARDOT', size: 'W28', name: 'Джинсы BARDOT W28', color:'darkblue' },
  { id: 4, brand: 'ALFANI', size: 'W30', name: 'Юбка ALFANI W30', color:'violet' },
  { id: 5, brand: 'CECE', size: 'W32', name: 'Куртка CECE W32', color:'black' },
];

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

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
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
        <h2>
        Brand 
          <button style={{marginLeft: '199px', backgroundColor: 'white'}} onClick={() => setIsBrandFilterOpen(!isBrandFilterOpen)}>
          {isBrandFilterOpen ? '-' : '+'}
          </button>
        </h2>
        {isBrandFilterOpen && (
          <section style={{ display: 'flex', flexDirection: 'column' }}>
            {['STATE', 'COOPER', 'BARDOT', 'ALFANI', 'CECE', 'DONNA RICCO'].map((brand) => (
              <label key={brand} style={{ marginBottom: '5px' }}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                {brand}
              </label>
            ))}
          </section>
        )}
        <h2>
        Size (Inches) 
          <button style={{marginLeft: '120px', backgroundColor: 'white'}} onClick={() => setIsSizeFilterOpen(!isSizeFilterOpen)}>
          {isSizeFilterOpen ? '-' : '+'}
          </button>
        </h2>
        {isSizeFilterOpen && (
          <section style={{ display: 'grid', justifyContent: 'center', flexWrap: 'wrap', gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {[
              'OSFA',
              'W26',
              'W27',
              'W28',
              'W29',
              'W30',
              'W31',
              'W32',
              'W33',
              'W34',
              'W35',
              'W36',
              'W38',
              'W40',
              'W42',
              'W44',
              'W46',
              'W48',
              'W50',
              'W52',
            ].map((size) => (
              <label key={size} style={{ margin: '5px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  checked={selectedSize === size}
                  onChange={() => handleSizeChange(size)}
                  style={{ display: 'none' }}
                />
                <section
                  style={{
                    border: '2px solid #000000',
                    borderRadius: '0px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: selectedSize === size ? '3px' : '2px',
                  }}
                >
                  {size}
                </section>
              </label>
            ))}
          </section>
        )}
        <h2>
        Color 
          <button style={{marginLeft: '205px', backgroundColor: 'white'}} onClick={() => setIsColorFilterOpen(!isColorFilterOpen)}>
          {isColorFilterOpen ? '-' : '+'}
          </button>
        </h2>
        {isColorFilterOpen && (
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {['black', 'beige', 'darkblue', 'green', 'violet', 'lightgrey','darkgrey', 'red', 'yellow', 'brown', 'pink', 'aquamarine'].map((color) => (
              <label key={color} style={{ margin: '5px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={selectedColor.includes(color)}
                  onChange={() => handleColorChange(color)}
                  style={{ display: 'none' }}
                />
                <section
                  style={{
                    border: '2px solid #000000',
                    borderRadius: '0px',
                    width: '20px',
                    height: '20px',
                    backgroundColor:(color),
                    borderWidth: selectedColor.includes(color) ? '3px' : '2px',
                  }}
                ></section>
              </label>
            ))}
          </section>
        )}
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

/** */