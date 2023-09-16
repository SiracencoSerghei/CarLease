// CarDetail.js
import React, { useEffect } from 'react';
import './CarDetails.css'

export const CarDetail = ({ car, onClose }) => {
  // Закрытие модального окна при нажатии клавиши Esc
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>Car Details</h2>
        <h2>Car Details</h2>
        <h2>Car Details</h2>
        <h2>Car Details</h2>
        <h2>Car Details</h2>
      </div>
    </div>
  );
};
