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
  const [click, setClick] = useState<boolean>(false);
  const handleBlur = () => {
    setTimeout(() => {
      setClick(false);
    }, 100);
  };

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
  const address = useSelector((state: RootState) => state.user.address);
  const aptNumber = useSelector((state: RootState) => state.user.aptNumber);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'address'
      ? dispatch(setAddress(e.target.value))
      : dispatch(setAptNumber(e.target.value));
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
          onClick={() => setClick(true)}
          onBlur={handleBlur}
          className='AddressInput'
          onChange={handleChange}
          value={address}
          name={'address'}
          placeholder='STREET, ADDRESS, CITY, STATE'
          type='text'
        />
        <input
          className='AptoInput'
          onChange={handleChange}
          value={aptNumber}
          name={'apto'}
          placeholder='APT #'
          type='text'
        />
      </div>
      {click && fetched ? (
        fetched.map((item: IBuilding, i: number) => {
          return (
            <div key={i}>
              <AddressCard
                _id={item._id}
                name={item.name}
                plans={item.plans}
                address={item.address}
                city={item.city}
                state={item.state}
                postal={item.postal}
              />
            </div>
          );
        })
      ) : (
        <></>
      )}
      <div className='Address_button'>
        <Link to={'/plan'}>
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Address;
