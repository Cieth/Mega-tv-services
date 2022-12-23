import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Cards from '../components/Cards';
import '../styles/pages/Plan.scss';
const Plan = () => {
  return (
    <>
      <div className='Plan_body'>
        <h1>Please select the TV plan you want to enjoy</h1>
        <Cards />
        <Link to={'/suscribe'}>
          <Button />
        </Link>
      </div>
    </>
  );
};

export default Plan;
