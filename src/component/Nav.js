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
          <Link to='/menu'>Menu</Link>
          <Link to='/reservation'>reservation</Link>
          <Link to='/order'>Order</Link>
          <a href='/login'>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
