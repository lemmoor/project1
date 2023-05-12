import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import Nav from './components/Nav';
import Dictionary from './pages/Dictionary';
import Idioms from './pages/Idioms';
import Vocabulary from './pages/Vocabulary';
import ScrollToTop from './components/ScrollToTop';
import Quizzes from './pages/Qiuzzes';
import TranslationsProvider from './components/TranslationsProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <TranslationsProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/idioms" element={<Idioms />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
      </TranslationsProvider>
    </Router>
  </React.StrictMode>
);
