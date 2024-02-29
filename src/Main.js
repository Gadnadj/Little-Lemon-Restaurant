import restaurant from './images/restauranfood.jpg';
import greekSalad from './images/greekSalad.jpg';
import lemon from './images/lemon.jpg';
import bruschetta from './images/bruschetta.jpg';
import leonardo from './images/leonardo.jpeg';
import brad from './images/brad.jpeg';
import george from './images/george.jpeg';
import margot from './images/margot.jpeg';
import stars from './images/5stars.jpeg';

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
            <div className='card2-body'>
              <img src={stars} alt='stars' className='stars'></img>
              <img src={brad} alt='brad' className='personality'></img>
              <h2>Brad Pitt</h2>
              <h3>"Really enjoyed the atmosphere."</h3>
            </div>
          </div>

          <div className='card2'>
            <div className='card2-body'>
              <img src={stars} alt='stars' className='stars'></img>
              <img src={george} alt='george' className='personality'></img>
              <h2>George Clooney</h2>
              <h3>"The greek salad was excellent!"</h3>
            </div>
          </div>

          <div className='card2'>
            <div className='card2-body'>
              <img src={stars} alt='stars' className='stars'></img>
              <img src={leonardo} alt='leonardo' className='personality'></img>
              <h2>Leonardo Di Caprio</h2>
              <h3>"You have to try the Greek Salad!"</h3>
            </div>
          </div>

          <div className='card2'>
            <div className='card2-body'>
              <img src={stars} alt='stars' className='stars'></img>
              <img src={margot} alt='brad' className='personality'></img>
              <h2>Margot Robbie</h2>
              <h3>"Awesome place peaceful atmosphere with delicious food"</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
