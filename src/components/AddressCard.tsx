import { useDispatch } from 'react-redux';

import { setAddress, setIdBuilding } from '../features/slices/userSlice';
import { IBuilding } from '../types/IBuilding';
const AddressCard = ({ _id, name, address, state, postal }: IBuilding) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAddress(address));
    dispatch(setIdBuilding(_id));
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
