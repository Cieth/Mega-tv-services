import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Presentation from './pages/Presentation';
import Basics from './pages/Basics';
import Adress from './pages/Address';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Presentation />} />
        <Route path='/basics' element={<Basics />} />
        <Route path='/adress' element={<Adress />} />
      </Routes>
    </div>
  );
}

export default App;
