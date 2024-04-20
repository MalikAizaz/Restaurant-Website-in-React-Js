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
      imageUrl: 'https://picsum.photos/300/300',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'https://picsum.photos/300/300',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'https://picsum.photos/300/300',
    },
    {
        title: 'Card 4',
        description: 'Description for Card 4',
        imageUrl: 'https://picsum.photos/300/300',
      },
      {
        title: 'Card 5',
        description: 'Description for Card 5',
        imageUrl: 'https://picsum.photos/300/300',
      },
      {
        title: 'Card 6',
        description: 'Description for Card 6',
        imageUrl: 'https://picsum.photos/300/300',
      },
      {
        title: 'Card 7',
        description: 'Description for Card 7',
        imageUrl: 'https://picsum.photos/300/300',
      },
      {
        title: 'Card 8',
        description: 'Description for Card 8',
        imageUrl: 'https://picsum.photos/300/300',
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
