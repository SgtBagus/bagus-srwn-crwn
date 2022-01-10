import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGES</h1>
  </div>
);


const DetailPage = () => {
  console.log(useParams());
  return (
    <div>
      <h1>DETAILS PAGES</h1>
    </div>
  )
};

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/hats' element={<HatsPage />} />
      <Route exact path='/hats/detail/:id' element={<DetailPage/>} />
    </Routes>
  );
}

export default App;
