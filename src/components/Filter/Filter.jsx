import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Stack, Icon } from '@chakra-ui/react';
import { FaChevronDown } from "react-icons/fa";
import './Filter.css'

export const Filter = ({ onSearch }) => {
  const [brand, setBrand] = useState('');
  // const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleSearch = () => {
    // Call the onSearch function with the filter criteria
    onSearch({
      brand,
      // priceFrom,
      priceTo,
      mileageFrom,
      mileageTo,
    });
  };

  return (
    <Stack className='container'>
      <FormControl className='labelWrapper'
      >
        <FormLabel className='labels'>Car Brand:</FormLabel>
        <Input className='inputs'
          type="text"
          value={brand}
          onChange={e => setBrand(e.target.value)}
        />
         <Icon
    as={ FaChevronDown }
    w="20px"
    h="20px" 
    position="absolute"
    right="18px" 
    top="14px" 
    color="gray.500" 
  />
      </FormControl>
      <FormControl className='labelWrapper'>
        <FormLabel className='labels'>Price per 1 Hour:</FormLabel>
        <Input  className='inputs'
          type="number"
          value={priceTo}
          onChange={e => setPriceTo(e.target.value)}
          placeholder="To"
        />
      </FormControl>
      <FormControl className='labelWrapper'>
        <FormLabel className='labels'>Car Mileage (km):</FormLabel>
        <div className='input-container'>
          <Input
            type="number"
            value={mileageFrom}
            onChange={e => setMileageFrom(e.target.value)}
            placeholder="From"
          />
          <Input
            type="number"
            value={mileageTo}
            onChange={e => setMileageTo(e.target.value)}
            placeholder="To"
          />
        </div>
      </FormControl>
      <Button colorScheme="teal" onClick={handleSearch}>
        Search
      </Button>
    </Stack>
  );
};
