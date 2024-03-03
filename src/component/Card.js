import greekSalad from '../images/greekSalad.jpg';
import lemon from '../images/lemon.jpg';
import bruschetta from '../images/bruschetta.jpg';

function Card() {
  return (
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
            ingredient has been sourced and is as authentic as can be imagined.
          </div>
          <button className='order'>Order Delivery</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
