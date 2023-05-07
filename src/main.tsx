import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import Nav from './components/Nav';
import Dictionary from './pages/Dictionary';
import Idioms from './pages/Idioms';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/idioms" element={<Idioms />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
