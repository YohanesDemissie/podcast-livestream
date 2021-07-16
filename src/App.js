import React, { useState } from 'react';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Title from './pages/Title';
// import './styles/home.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Title />
     <Home />
     <Episodes />
    </div>
  );
}

export default App;
