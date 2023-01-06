import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { setAddress, setAptNumber } from '../features/slices/userSlice';
import '../styles/pages/Address.scss';
import { RootState } from '../app/store';
import Button from '../components/Button';
import { IBuilding } from '../types/IBuilding';
import AddressCard from '../components/AddressCard';
const Address = () => {
  const [fetched, setFetched] = useState<any>();
  interface dataI {
    address: string;
    apto: string;
  }

  type GetBuilding = {
    data: IBuilding[];
  };

  const retrieveData = async () => {
    await axios.get<GetBuilding>('http://localhost:8080/show').then((data) => {
      setFetched(data.data.data);
    });
  };

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
      {fetched ? (
        fetched.map((item: IBuilding) => {
          return (
            <AddressCard
              key={item.id}
              id={item.id}
              name={item.name}
              plans={item.plans}
              address={item.address}
              city={item.city}
              state={item.state}
              postal={item.postal}
            />
          );
        })
      ) : (
        <></>
      )}
      <div className='Address_button' onClick={handleClick}>
        <Link to={'/plan'}>
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Address;
