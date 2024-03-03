import leonardo from '../images/leonardo.jpeg';
import brad from '../images/brad.jpeg';
import george from '../images/george.jpeg';
import margot from '../images/margot.jpeg';
import stars from '../images/5stars.jpeg';

function Testimonials() {
  return (
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
  );
}

export default Testimonials;
