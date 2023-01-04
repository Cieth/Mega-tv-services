import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { setAddress, setAptNumber } from '../features/slices/userSlice';
import '../styles/pages/Address.scss';
import { RootState } from '../app/store';
import Button from '../components/Button';
const Address = () => {
  interface dataI {
    address: string;
    apto: string;
  }
  const [items,setItems] = useState()
  const retrieveData = () => {
    fetch('http://localhost:8080/show').then((data) => {
      setItems(data)
    }).then((data) => {
      setItems(data)
    })

  useEffect(() => {
    retrieveData();
  }, []);

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
          placeholder='STREET, ADDRESS, CITY, STATE'
          type='text'
        />
        <input
          className='AptoInput'
          onChange={handleChange}
          value={data.apto}
          name={'apto'}
          placeholder='APT #'
          type='text'
        />
      </div>
      <div className='Address_button' onClick={handleClick}>
        <Link to={'/plan'}>
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Address;
