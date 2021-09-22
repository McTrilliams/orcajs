import React from 'react';
// Router
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import SingleCalc from './components/SingleCalc';
// Styles 
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singlecalcgen' element={<SingleCalc />} />
      </Routes>
      <GlobalStyle /> 
    </Router>

  );
}

export default App;
