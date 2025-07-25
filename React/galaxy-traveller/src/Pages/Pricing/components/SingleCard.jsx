import React from 'react';

const SingleCard = ({ title, description, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '16px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(255, 255, 255, 0.6)',
    backgroundColor: 'black',
    margin: '1rem',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
};

export default SingleCard;
