import '../styles/pages/Presentation.scss';
import { Link } from 'react-router-dom';
const Presentation = () => {
  return (
    <div className='Presentation'>
      <div className='Presentation_title'>
        <h1>The best TV service around!</h1>
      </div>
      <div className='Presentation_text'>
        <p>Are you ready to enjoy ultra-best service?</p>
      </div>
      <div className='Presentation_button'>
        <Link to={'/basics'}>
          <button>LET'S DO IT</button>
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
