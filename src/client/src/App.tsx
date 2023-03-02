import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import AdminPage from './pages/Admin';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="admin" element={<AdminPage />}></Route>
      </Routes>
    </>
  );
}

export default App;