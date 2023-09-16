import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {CarDetail} from '../CarDetail/CarDetail'
import './Card.css'

export const Card = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('Modal opened');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="card">
      <div className="card-image">
        <img src={car.img} alt={car.make} />
        <button className="like-button">❤️</button>
      </div>
      <div className="card-info">
        <h3>{car.make}</h3>
        <p>
          {car.year} - ${car.price}
        </p>
      </div>
      <div className="card-details">
        <span>
          {car.city}, {car.country}
        </span>
        <span>
          {car.rentalCompany}
        </span>
        <span>
          {car.type}
        </span>
        <span>
          {car.model}
        </span>
        <span>
          {car.mileage} km
        </span>
        <span>
          {car.functionalities[0]}
        </span>
      </div>
      <button className="open-button" onClick={openModal}>
        Learn More
      </button>

      {isModalOpen && (
        ReactDOM.createPortal(
          <CarDetail car={car} onClose={closeModal} />,
          document.getElementById('modal-root')
        )
      )}
    </div>
  );
};
