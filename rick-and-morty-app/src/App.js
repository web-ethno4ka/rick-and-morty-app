import './App.css';
import React from 'react';
import List from './components/List/List';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/characters" element={<List />} />
      <Route path="/characters/:id" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
