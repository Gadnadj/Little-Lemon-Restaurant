import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez Routes au lieu de Switch
import './App.css';
import Nav from './component/Nav.js';
import Main from './Main.js';
import Footer from './component/Footer.js';
import About from './About.js';
import Menu from './Menu.js';
import Reservation from './Reservation.js';
import Order from './Order.js';
import Login from './Login.js';
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/order' element={<Order />} />
          <Route path='/login' element={<Login />} /> */
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
