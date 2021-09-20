import React from 'react';
// Router
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header'

// Styles 
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <Router>
      <Header />
      <GlobalStyle /> 
    </Router>

  );
}

export default App;
