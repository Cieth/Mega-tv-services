import React from 'react';
import { IBuilding } from '../types/IBuilding';
import { setAddress } from '../features/slices/userSlice';
import { useDispatch } from 'react-redux';
const AddressCard = ({ id, name, address, state, postal }: IBuilding) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setAddress(address));
  };
  return (
    <div
      style={{
        display: 'flex',
        margin: '1rem',
        columnGap: '10rem',
        backgroundColor: '#ccc',
        borderRadius: '1rem',
      }}
    >
      <div style={{}}>
        <div>{name}</div>
        <div>{`${address},${state},${postal}`}</div>
      </div>
      <div>
        <button onClick={handleClick}>SELECT</button>
      </div>
    </div>
  );
};

export default AddressCard;
