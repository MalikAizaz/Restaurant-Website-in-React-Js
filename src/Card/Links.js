// App.js or any other component where you want to render the cards

import React from 'react';
import Card from './Card'; // Import the Card component
import './Crad.css'; // Import CSS for app styles

const Links = () => {
  // Sample data for cards
  const cardData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: 'img/bg.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'img/bg1.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'img/bg2.jpg',
    },
    {
        title: 'Card 4',
        description: 'Description for Card 4',
        imageUrl: 'img/bg3.jpg',
      },
      {
        title: 'Card 5',
        description: 'Description for Card 5',
        imageUrl: 'img/pizza.jpg',
      },
      {
        title: 'Card 6',
        description: 'Description for Card 6',
        imageUrl: 'img/pizza.jpg',
      },
      {
        title: 'Card 7',
        description: 'Description for Card 7',
        imageUrl: 'img/Pizza2.jpg',
      },
      {
        title: 'Card 8',
        description: 'Description for Card 8',
        imageUrl: 'img/pizza.jpg',
      },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default Links;
