import React from 'react';
import './HorizontalCard.css'; // Import CSS file for styling

const HorizontalCard = ({ imageSrc, title, description }) => {
  return (
    <div className='main-card'>
    <div className="horizontal-card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default HorizontalCard;
