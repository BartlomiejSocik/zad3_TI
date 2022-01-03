import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import Informations from './pages/Informations';
import Yacht from './pages/Yacht';

function App() {
  return (
      <Router>
          <Routes>
            <Route exact path="/" element={<MainPage/>} />
            <Route exact path="/o-nas" element={<AboutUs/>} />
            <Route exact path="/informacje-o-jednostakch" element={<Informations/>} />
            <Route exact path="/jacht" element={<Yacht/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </Router>
  );
}

export default App;
