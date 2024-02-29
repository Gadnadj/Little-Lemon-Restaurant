import restaurant from './images/restauranfood.jpg';
import greekSalad from './images/greekSalad.jpg';
import lemon from './images/lemon.jpg';
import bruschetta from './images/bruschetta.jpg';
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
        <button id='reserve'>Reserve a table</button>
        <img src={restaurant} alt='restaurant'></img>
      </div>
      <div className='specials'>
        <h1>Specials</h1>
        <button id='online'>Online Menu</button>
      </div>

      <div className='cards'>
        <div className='card'>
          <img src={greekSalad} alt='greek'></img>
          <div className='card-body'>
            <div className='card-title'>Greek Salad</div>
            <div className='card-text'>
              Freshly chopped tomatoes, cucumbers, onions, and peppers, topped
              with feta cheese and Kalamata .
            </div>
            <button className='order'>Order Delivery</button>
          </div>
        </div>

        <div className='card'>
          <img src={bruschetta} alt='greek'></img>
          <div className='card-body'>
            <div className='card-title'>Bruschetta</div>
            <div className='card-text'>
              Our Bruschetta is made from homemade grilled bread that has been
              smeared with garlic and seasoned with salt and olive oil. Topped
              with fresh vegetables.
            </div>
            <button className='order'>Order Delivery</button>
          </div>
        </div>

        <div className='card'>
          <img src={lemon} alt='greek'></img>
          <div className='card-body'>
            <div className='card-title'>Lemon Cake</div>
            <div className='card-text'>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </div>
            <button className='order'>Order Delivery</button>
          </div>
        </div>
      </div>

      <div className='testimonials'>
        <h1>Testimonials</h1>
        <div className='cards2'>
          <div className='card2'>
            <img></img>
            <img></img>
            <h2></h2>
            <h3></h3>
          </div>
          <div className='card2'>
            <img></img>
            <img></img>
            <h2></h2>
            <h3></h3>
          </div>
          <div className='card2'>
            <img></img>
            <img></img>
            <h2></h2>
            <h3></h3>
          </div>
          <div className='card2'>
            <img></img>
            <img></img>
            <h2></h2>
            <h3></h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
