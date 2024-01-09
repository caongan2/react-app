// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ContactDetail from './components/ContactDetail';
import Sidebar from './components/Sidebar';
import AppRoute from './components/AppRoute';

function App() {
  return (
    <AppRoute />
  );
}

export default App;
