import React from 'react';
import Link from './Links';
import './Crad.css'; // Import CSS for card styles

const Card = ({ title, description, imageUrl }) => {
  return (
    <>
    <a href='https://getbootstrap.com/docs/5.3/components/card/'>
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
    </a>
    </>
  );
};

export default Card;
