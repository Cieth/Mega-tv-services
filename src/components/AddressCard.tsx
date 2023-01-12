import { useDispatch } from 'react-redux';
import '../styles/components/AdressCard.scss';
import { setAddress, setIdBuilding } from '../features/slices/userSlice';
import { IBuilding } from '../types/IBuilding';
const AddressCard = ({ _id, name, address, state, postal }: IBuilding) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAddress(address));
    dispatch(setIdBuilding(_id));
  };
  return (
    <div className='CardBody'>
      <div className='CardNames'>
        <div>{name}</div>
        <div>{`${address},${state},${postal}`}</div>
      </div>
      <div className='CardButton'>
        <button onClick={handleClick}>SELECT</button>
      </div>
    </div>
  );
};

export default AddressCard;
