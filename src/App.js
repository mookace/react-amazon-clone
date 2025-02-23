import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NavBar } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
