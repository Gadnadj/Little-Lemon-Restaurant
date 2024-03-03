import React from 'react';
import littleimage from '../images/Little-Lemon.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <img src={littleimage} alt='Little Lemon'></img>
      <ul className='navi'>
        <li className='navii'>
          <a href='/'>Home</a>
          <Link to='/about'>About</Link>
          <a href='/menu'>Menu</a>
          <a href='/reservation'>Reservation</a>
          <a href='/order'>Order Online</a>
          <a href='/login'>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
