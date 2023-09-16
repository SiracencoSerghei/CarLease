import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CarDetail } from '../CarDetail/CarDetail';
import './Card.css';
import Separator from '../Separator/Separator';
import {FaHeart} from 'react-icons/fa';
import {FiHeart} from 'react-icons/fi';

export const Card = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    // Инвертируем состояние isLiked при клике
    setIsLiked(!isLiked);
  };

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
        <button
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={toggleLike}
        >
          {isLiked ? <FaHeart /> : <FiHeart />}
        </button>
      </div>
      <div className="card-info">
        <h3>
          {car.make} {car.model}, {car.year}{' '}
        </h3>
        <p>{car.rentalPrice}</p>
      </div>
      <div className="card-details">
        <span className="card-span">
          {car.city}, {car.country}
        </span>
        <Separator className="svg" />
        <span className="card-span">{car.rentalCompany}</span>
        <Separator className="svg" />
        <span className="card-span">{car.type}</span>
        <Separator className="svg" />
        <span className="card-span">{car.model}</span>
        <Separator className="svg" />
        <span className="card-span">{car.mileage.toLocaleString()} km</span>
        <Separator className="svg" />
        <span className="card-span">{car.functionalities[0]}</span>
      </div>
      <button className="open-button" onClick={openModal}>
        Learn More
      </button>

      {isModalOpen &&
        ReactDOM.createPortal(
          <CarDetail car={car} onClose={closeModal} />,
          document.getElementById('modal-root')
        )}
    </div>
  );
};
