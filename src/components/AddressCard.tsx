import React from 'react';
import { IBuilding } from '../types/IBuilding';

const AddressCard = ({ id, name, address, state, postal }: IBuilding) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        columnGap: '10rem',
      }}
    >
      <div style={{}}>
        <div>{name}</div>
        <div>{address + ',' + state + ',' + postal}</div>
      </div>
      <div>
        <button>SELECT</button>
      </div>
    </div>
  );
};

export default AddressCard;
