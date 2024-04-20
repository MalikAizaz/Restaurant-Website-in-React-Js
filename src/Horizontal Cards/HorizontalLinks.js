import React from 'react';
import HorizontalCard from './HorizontalCard';

const Horizontal = () => {
  return (
    <div>
      {/* <h1>Horizontal Cards</h1> */}
      <HorizontalCard
        imageSrc="https://picsum.photos/200/300"
        title="Sample Title 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <HorizontalCard
        imageSrc="https://picsum.photos/200/300"
        title="Sample Title 2"
        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      />
      <HorizontalCard
        imageSrc="https://picsum.photos/200/300"
        title="Sample Title 3"
        description="Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo."
      />
    </div>
  );
};

export default Horizontal;
