import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes> 
    </div>
  );
}

export default App;