import React, { useState } from 'react';
import PropTypes from 'prop-types';
import  './dice.css';


const Dice = () => {
  const [value, setValue] = useState(null);

  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setValue(randomValue);
  };

  const handleClick = () => {
    rollDice();
  };

  const imageUrls = [
    'https://static.thenounproject.com/png/2502961-200.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTKpQB-Lo44WmdxbHqvUNv4NGIL1fd9PGFDV_sX_v5ZtmjxGSwjdkoB7LWthm9JoNlQE&usqp=CAU',
    'https://static.thenounproject.com/png/2502958-200.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJ9CYHXDxQuzRnFzxIiZbwWKtRyaggLNTi_tfzmLN4ZU0IZ78NBvi-MVfLQsO5Uvdvs4&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOUe8isLYzEySFMZ5W75MBim6ejjQ4KGSKt4pbrsJi_OXAATHxu11kFb35IYVp9KzMe0&usqp=CAU',
    'https://static.thenounproject.com/png/2502963-200.png',
  ];

  const imageUrl = value ? imageUrls[value - 1] : null;

  return (
    <div
      className='dice'
      onClick={handleClick}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Dice ${value}`}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      ) : null}
    </div>
  );
};

Dice.propTypes = {
  value: PropTypes.number,
};

export default Dice;
