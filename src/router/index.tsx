import React from 'react';

import { Routes, BrowserRouter, Route } from 'react-router-dom';

import App from '../App';
import SignIn from '../view/SignIn';

const RoutersApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;
