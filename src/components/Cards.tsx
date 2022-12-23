import React from 'react';
import '../styles/components/Cards.scss';
import Card from './Card';
const Cards = () => {
  return (
    <>
      <form className='Cards_body'>
        <Card plan={'Basic'} />
        <Card plan={'Premium'} />
      </form>
    </>
  );
};

export default Cards;
