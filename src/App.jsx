import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Privacy from './pages/Privacy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/policy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
