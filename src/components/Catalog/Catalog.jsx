import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { Filter } from '../Filter/Filter';

export const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  // const [filters, setFilters] = useState({ brand: '', price: '', mileage: '' });
  const [loadMore, setLoadMore] = useState(8);
  const [carBrands, setCarBrands] = useState([]); // Состояние для хранения названий авто

  useEffect(() => {
    // Fetch car listings from the mock API
    fetch('https://644ac87079279846dcf1c85b.mockapi.io/carLease')
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data.slice(0, loadMore));
        console.log(data);
        // Извлеките уникальные названия авто и установите их в состояние carBrands
        const uniqueBrands = [...new Set(data.map(car => car.make))];
        setCarBrands(uniqueBrands);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [loadMore]);

  useEffect(() => {
    const filtered = cars
      // .filter(car => {
      //   if (filters.brand && car.make !== filters.brand) {
      //     return false;
      //   }
      //   if (filters.price && car.price > parseFloat(filters.price)) {
      //     return false;
      //   }
      //   if (filters.mileage && car.mileage > parseInt(filters.mileage)) {
      //     return false;
      //   }
      //   return true;
      // })
      .slice(0, loadMore);

    setFilteredCars(filtered);
  }, [cars,
    //  filters,
      loadMore]);

  const handleLoadMore = () => {
    setLoadMore(prevLoadMore => prevLoadMore + 8);
  };

  // const handleFilterChange = e => {
  //   const { name, value } = e.target;
  //   setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  // };

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        <Filter carBrands={carBrands} />
      </div>
      <div className="car-listings">
        {filteredCars.map(car => (
            <Card key={car.id} car={car} />
        ))}
      </div>
      {filteredCars.length < cars.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};
