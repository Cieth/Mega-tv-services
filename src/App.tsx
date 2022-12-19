import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Presentation from './pages/Presentation';
import Basics from './pages/Basics';
import Adress from './pages/Address';
import Plan from './pages/Plan';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Presentation />} />
        <Route path='/basics' element={<Basics />} />
        <Route path='/address' element={<Adress />} />
        <Route path='/plan' element={<Plan />} />
      </Routes>
    </div>
  );
}

export default App;
