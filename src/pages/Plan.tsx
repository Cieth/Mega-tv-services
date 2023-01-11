import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Cards from '../components/Cards';
import '../styles/pages/Plan.scss';
import { GetBuilding } from '../types/GetBuilding';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
const Plan = () => {
  const [fetched, setFetched] = useState<any>();
  const id = useSelector((state: RootState) => state.user.idBuilding);

  const retrieveData = async () => {
    await axios.get<GetBuilding>('http://localhost:8080/show').then((data) => {
      const building = data.data.data.filter((x) => x._id === id);
      setFetched(building);
    });
  };

  useEffect(() => {
    retrieveData();
  }, []);
  return (
    <>
      <div className='Plan_body'>
        <h1>Please select the TV plan you want to enjoy</h1>
        <Cards building={fetched && fetched} />
        <Link to={'/suscribe'}>
          <Button />
        </Link>
      </div>
    </>
  );
};

export default Plan;
