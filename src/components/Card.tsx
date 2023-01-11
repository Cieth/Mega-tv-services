import React from 'react';
import { useDispatch } from 'react-redux';
import { setPlan } from '../features/slices/userSlice';
import '../styles/components/Card.scss';

const Card = ({ plan }: any) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setPlan(plan));
  };

  return (
    <div className='Card__main'>
      <div className='Card__title'>
        <p>{plan}</p>
        <span>Service</span>
      </div>
      <div className='Card__price'>
        <p>
          $<span>{plan === 'Basic' ? 30 : 50}</span>
          /mo
        </p>
      </div>
      <input
        onClick={handleClick}
        type='radio'
        id='30'
        name='plans'
        value={30}
      />
    </div>
  );
};

export default Card;
