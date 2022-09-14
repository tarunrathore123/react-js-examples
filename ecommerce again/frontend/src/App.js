import React, { useRef } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';
import styled from 'styled-components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
