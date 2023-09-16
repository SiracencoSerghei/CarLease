import React, { useState } from 'react';

export const CarFilter = ({ onSearch }) => {
  const [brand, setBrand] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleSearch = () => {
    // Call the onSearch function with the filter criteria
    onSearch({
      brand,
      priceFrom,
      priceTo,
      mileageFrom,
      mileageTo,
    });
  };

  return (
    <div className="car-filter">
      <h2>Car Filter</h2>
      <div>
        <label>Car Brand:</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div>
        <label>Price per 1 Hour:</label>
        <input
          type="number"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          placeholder="From"
        />
        <input
          type="number"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          placeholder="To"
        />
      </div>
      <div>
        <label>Car Mileage (km):</label>
        <input
          type="number"
          value={mileageFrom}
          onChange={(e) => setMileageFrom(e.target.value)}
          placeholder="From"
        />
        <input
          type="number"
          value={mileageTo}
          onChange={(e) => setMileageTo(e.target.value)}
          placeholder="To"
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};