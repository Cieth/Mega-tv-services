import React from 'react';
import '../styles/pages/Basics.scss';
import { Link } from 'react-router-dom';
const Basics = () => {
  return (
    <div className='Basics'>
      <div className='Basics_text'>
        <p>Awesome! Let's get started with the basics.</p>
      </div>
      <div className='Basics_input'>
        <input placeholder='FIRST NAME' type='text' />
        <input placeholder='LAST NAME' type='text' />
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
