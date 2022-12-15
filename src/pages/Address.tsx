import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { setAddress, setAptNumber } from '../features/slices/userSlice';
import '../styles/pages/Address.scss';
import { RootState } from '../app/store';
const Adress = () => {
  interface dataI {
    address: string;
    apto: string;
  }
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.user.firstName);
  const [data, setData] = useState<dataI>({
    address: '',
    apto: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'address'
      ? setData({ ...data, address: e.target.value })
      : setData({ ...data, apto: e.target.value });
  };
  const handleClick = () => {
    dispatch(setAddress(data.address));
    dispatch(setAptNumber(data.apto));
  };
  return (
    <div className='Address'>
      <div className='Address_text'>
        <p>
          Pleasure to meet you, {name}!
          <br /> What is your install address ?
        </p>
      </div>
      <div className='Address_input'>
        <input
          className='AddressInput'
          onChange={handleChange}
          value={data.address}
          name={'address'}
          placeholder='Address'
          type='text'
        />
        <input
          className='AptoInput'
          onChange={handleChange}
          value={data.apto}
          name={'apto'}
          placeholder='Apto'
          type='text'
        />
      </div>
      <div className='Address_button'>
        <Link to={'/adress'}>
          <button onClick={handleClick}>NEXT</button>
        </Link>
      </div>
    </div>
  );
};

export default Adress;
