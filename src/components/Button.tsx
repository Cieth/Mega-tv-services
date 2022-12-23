import '../styles/components/Button.scss';
import { useLocation } from 'react-router-dom';
const Button = () => {
  const location = useLocation();

  const getCurrentLocation = () => {
    switch (location.pathname) {
      case '/':
        return "LET'S DO IT";
      case '/basics':
        return 'NEXT';
      case '/address':
        return 'YES!';
      case '/plan':
        return 'I AM READY!';
      case '/suscribe':
        return 'SUSCRIBE NOW!';
    }
  };
  const currentLocation = getCurrentLocation();
  return (
    <div className='Basics_button'>
      <button>{currentLocation}</button>
    </div>
  );
};

export default Button;
