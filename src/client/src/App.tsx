import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;