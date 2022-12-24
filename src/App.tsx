import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Presentation from './pages/Presentation';
import Basics from './pages/Basics';
import Address from './pages/Address';
import Plan from './pages/Plan';
import Suscribe from './pages/Suscribe';
import FinalSteps from './pages/FinalSteps';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Presentation />} />
        <Route path='/basics' element={<Basics />} />
        <Route path='/address' element={<Address />} />
        <Route path='/plan' element={<Plan />} />
        <Route path='/suscribe' element={<Suscribe />} />
        <Route path='/finalsteps' element={<FinalSteps />} />
      </Routes>
    </div>
  );
}

export default App;
