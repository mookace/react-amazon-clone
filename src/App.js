import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  NavBar,
  Checkout,
  ProductPage,
  SearchResults,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
