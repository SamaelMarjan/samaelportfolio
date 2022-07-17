import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Header/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
