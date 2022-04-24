import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import NotFound from './Pages/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProfileClient from './Pages/ProfileClient/ProfileClient';
import ProfileVendors from './Pages/ProfileVendors/ProfileVendors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<ProfileClient />} />
          <Route path='/profilevendor/:id' element={<ProfileVendors />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
