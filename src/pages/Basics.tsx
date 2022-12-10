import { useState } from 'react';
import '../styles/pages/Basics.scss';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
const Basics = () => {
  interface dataI {
    name?: string;
    lastName?: string;
  }
  const [data, setData] = useState<dataI>({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'name'
      ? setData({ ...data, name: e.target.value })
      : setData({ ...data, lastName: e.target.value });
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
      <div className='Basics_button'>
        <Link to={'/basics'}>
          <button>LET'S DO IT</button>
        </Link>
      </div>
    </div>
  );
};

export default Basics;
