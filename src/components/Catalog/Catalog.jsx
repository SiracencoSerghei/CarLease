// Catalog.js
// import React, { useState, useEffect } from 'react';
// import {Card} from '../Card/Card'; // Create Card component for displaying individual car listings

export const Catalog = () => {
  // const [cars, setCars] = useState([]); // State to store car listings
  // const [filteredCars, setFilteredCars] = useState([]); // State to store filtered car listings
  // const [filters, setFilters] = useState({ brand: '', price: '', mileage: '' });
  // const [loadMore, setLoadMore] = useState(8); // Number of initial listings to display

  // useEffect(() => {
    // Fetch car listings from an API or your data source
    // Update the 'cars' state with fetched data
    // For example:
    // fetchCars().then((data) => setCars(data));
  // }, []);

  // useEffect(() => {
  //   // Apply filters to the car listings whenever filter values change
  //   const filtered = cars
  //     .filter((car) => {
  //       if (filters.brand && car.brand !== filters.brand) {
  //         return false;
  //       }
  //       if (filters.price && car.price > parseFloat(filters.price)) {
  //         return false;
  //       }
  //       if (filters.mileage && car.mileage > parseInt(filters.mileage)) {
  //         return false;
  //       }
  //       return true;
  //     })
  //     .slice(0, loadMore); // Apply Load More limit
  //   setFilteredCars(filtered);
  // }, [cars, filters, loadMore]);

  // const handleLoadMore = () => {
  //   // Increase the limit to load more listings
  //   setLoadMore((prevLoadMore) => prevLoadMore + 8);
  // };

  // const handleFilterChange = (e) => {
  //   // Update filter values when inputs change
  //   const { name, value } = e.target;
  //   setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  // };

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        <input
          type="text"
          name="brand"
          placeholder="Filter by brand"
          // value={filters.brand}
          // onChange={handleFilterChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Filter by price"
          // value={filters.price}
          // onChange={handleFilterChange}
        />
        <input
          type="number"
          name="mileage"
          placeholder="Filter by mileage"
          // value={filters.mileage}
          // onChange={handleFilterChange}
        />
      </div>
      <div className="car-listings">
        {/* {filteredCars.map((car) => (
          <Card key={car.id} car={car} />
        ))} */}
      </div>
      {/* {filteredCars.length < cars.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )} */}
    </div>
  );
};
