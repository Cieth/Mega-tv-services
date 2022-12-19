import { useState } from 'react';
import '../styles/pages/Basics.scss';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName } from '../features/slices/userSlice';
import Button from '../components/Button';

const Basics = () => {
  interface dataI {
    name: string;
    lastName: string;
  }
  const dispatch = useDispatch();
  const [data, setData] = useState<dataI>({
    name: '',
    lastName: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'name'
      ? setData({ ...data, name: e.target.value })
      : setData({ ...data, lastName: e.target.value });
  };

  const handleClick = () => {
    dispatch(setFirstName(data.name));
    dispatch(setLastName(data.lastName));
  };
  console.log(data);
  return (
    <div className='Basics'>
      <div className='Basics_text'>
        <p>Awesome! Let's get started with the basics.</p>
      </div>
      <div className='Basics_input'>
        <input
          onChange={handleChange}
          value={data.name}
          name={'name'}
          placeholder='First name'
          type='text'
        />
        <input
          onChange={handleChange}
          value={data.lastName}
          name={'lastName'}
          placeholder='Last name'
          type='text'
        />
      </div>
      <div className='Basics_button' onClick={handleClick}>
        <Link to={'/address'}>
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Basics;
