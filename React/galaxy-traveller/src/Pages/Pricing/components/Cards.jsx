import React from 'react';
import SingleCard from './SingleCard';

const cardData = [
  {
    title: 'Card 1',
    description: 'This is the first card.',
    image: 'https://images.rawpixel.com/dark_image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA2L3NyLWltYWdlLTEzMDYyNS1zaS1zLTUwNF8xLnBuZw.png',
  },
  {
    title: 'Card 2',
    description: 'Second card with some text.',
    image: 'https://images.rawpixel.com/dark_image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA3L3NyLWltYWdlLTI3MDYyNS1qZTE1LXMtMTY1MS5wbmc.png',
  },
  {
    title: 'Card 3',
    description: 'Another card description.',
    image: 'https://th.bing.com/th?id=OIF.idDkPz8RY%2fxNqC%2bqCycmyA&w=186&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7',
  },
];

export const Cards = () => {
  return (
    <div style={styles.container}>
      {cardData.map((card, index) => (
        <SingleCard
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};
