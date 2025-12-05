import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LocationPage } from './pages/LocationPage';
import { ServiceAreasIndex } from './pages/ServiceAreasIndex';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service-areas" element={<ServiceAreasIndex />} />
      <Route path="/service-areas/bellingham" element={<ServiceAreasIndex />} />
      <Route path="/service-areas/bellingham/:slug" element={<LocationPage />} />
    </Routes>
  );
}

export default App;
