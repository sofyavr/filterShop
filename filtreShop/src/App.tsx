import React, { useState } from 'react';

interface ClothingItem {
  id: number;
  brand: string;
  size: string;
  name: string;
}

const clothingItems: ClothingItem[] = [
  { id: 1, brand: 'STATE', size: 'OSFA', name: 'Платье STATE OSFA' },
  { id: 2, brand: 'COOPER', size: 'W26', name: 'Футболка COOPER W26' },
  { id: 3, brand: 'BARDOT', size: 'W28', name: 'Джинсы BARDOT W28' },
  { id: 4, brand: 'ALFANI', size: 'W30', name: 'Юбка ALFANI W30' },
  { id: 5, brand: 'CECE', size: 'W32', name: 'Куртка CECE W32' },
];

const ShopPage: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isBrandFilterOpen, setIsBrandFilterOpen] = useState<boolean>(true);
  const [isSizeFilterOpen, setIsSizeFilterOpen] = useState<boolean>(true);

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

  const filteredItems = clothingItems.filter(
    (item) =>
      (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
      (!selectedSize || item.size === selectedSize)
  );

  return (
    <div style={{ position: 'fixed', top: 0, backgroundColor: '#ffffff', color: '#000000', padding: '20px' }}>
      <div>
        <h2>
        Brand 
          <button style={{marginLeft: '200px', backgroundColor: 'white'}} onClick={() => setIsBrandFilterOpen(!isBrandFilterOpen)}>
          {isBrandFilterOpen ? '-' : '+'}
          </button>
        </h2>
        {isBrandFilterOpen && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          </div>
        )}
      </div>
      <div>
        <h2>
        Size (Inches) 
          <button style={{marginLeft: '120px', backgroundColor: 'white'}} onClick={() => setIsSizeFilterOpen(!isSizeFilterOpen)}>
          {isSizeFilterOpen ? '-' : '+'}
          </button>
        </h2>
        {isSizeFilterOpen && (
          <div style={{ display: 'grid', justifyContent: 'center', flexWrap: 'wrap', gridTemplateColumns: 'repeat(5, 1fr)' }}>
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
                <div
                  style={{
                    border: '2px solid #000000',
                    borderRadius: '5px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: selectedSize === size ? 'bold' : 'normal',
                  }}
                >
                  {size}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
      <div>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopPage;

/** */