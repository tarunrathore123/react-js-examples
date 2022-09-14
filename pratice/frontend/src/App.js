import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Beast from './components/Beast';
import CardWithSlideUpHoverEffect from './components/css/cards/CardWithSlideUpHoverEffect';
import Hoc from './components/hoc';
import Popup from './components/Popup';
import StringTransformer from './components/StringTransformer';
import SubArrayDivision from './components/SubArrayDivision';
import SumDigits from './components/sumDigits';
import SumStrings from './components/SumStrings';
import Homepage from './pages/Homepage';
import CitiesSlider from './components/CitiesSlider';
import FlippingCards from './components/FlippingCards';

const App = () => {
  const num1 = 11;
  const num2 = 12;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/slider" element={<CitiesSlider />}></Route>
        <Route exact path="/FlippingCards" element={<FlippingCards />}></Route>
        <Route exact path="/beast" element={<Beast />}></Route>
        <Route exact path="/Popup" element={<Popup />}></Route>
        <Route exact path="/hoc" element={<Hoc />}></Route>
        <Route exact path="/SumDigits" element={<SumDigits />}></Route>
        <Route
          exact
          path="/StringTransformer"
          element={<StringTransformer />}
        ></Route>
        <Route
          exact
          path="/SubArrayDivision"
          element={<SubArrayDivision />}
        ></Route>
        <Route
          exact
          path="/SumStrings"
          element={<SumStrings num1={num1} num2={num2} />}
        ></Route>
        <Route
          exact
          path="/card/card1"
          element={<CardWithSlideUpHoverEffect />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
