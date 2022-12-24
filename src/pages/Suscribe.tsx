import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail, setPhoneNumber } from '../features/slices/userSlice';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/pages/Suscribe.scss';
const Suscribe = () => {
  interface dataI {
    email: string;
    phoneNumber: string;
  }
  const dispatch = useDispatch();
  const [data, setData] = useState<dataI>({
    email: '',
    phoneNumber: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'email'
      ? setData({ ...data, email: e.target.value })
      : setData({ ...data, phoneNumber: e.target.value });
  };

  const handleClick = () => {
    dispatch(setEmail(data.email));
    dispatch(setPhoneNumber(data.phoneNumber));
  };
  console.log(data);
  return (
    <div className='Suscribe'>
      <div className='Suscribe_text'>
        <h1>Great news! Your first month's free!</h1>
        <p>
          To get set up, just provide your email and phone number and we can
          remind you when the free trial ends.
        </p>
      </div>
      <div className='Suscribe_input'>
        <input
          onChange={handleChange}
          value={data.email}
          name={'email'}
          placeholder='Email'
          type='text'
        />
        <input
          onChange={handleChange}
          value={data.phoneNumber}
          name={'phoneNumber'}
          placeholder='Phone number'
          type='text'
        />
      </div>
      <div className='Suscribe_button' onClick={handleClick}>
        <Link to={'/finalsteps'}>
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Suscribe;
