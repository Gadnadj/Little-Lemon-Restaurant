import React from 'react';
import { Link } from 'react-router-dom';
import restaurant from './images/restauranfood.jpg';
import Card from './component/Card.js';
import Testimonials from './component/Testimonials.js';
import Descriptions from './component/Descriptions.js';

function Main() {
  return (
    <>
      <div className='presentation'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h3>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </h3>
        <button id='reserve'>
          <Link to='/reservation' className='link'>
            Reserve a table
          </Link>
        </button>
        <img src={restaurant} alt='restaurant'></img>
      </div>
      <div className='specials'>
        <h1>Specials</h1>
        <button id='online'>
          <Link to='/menu' className='link'>
            Online Menu
          </Link>
        </button>
      </div>

      <Card />
      <Testimonials />
      <Descriptions />

      <div className='separation'></div>
      <div className='separation2'></div>
    </>
  );
}
export default Main;
