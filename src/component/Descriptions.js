import mario from '../images/Mario.jpg';
import restaurant2 from '../images/restaurant.jpg';

function Description() {
  return (
    <div className='descri'>
      <div className='left-side'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex
          leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa.
          Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum
          blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id,
          vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae
          lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit
          consequat. In dictum ligula in elit euismod malesuada. Curabitur
          varius augue id tempus ultricies. Mauris suscipit porta odio, et
          pretium nibh scelerisque ut.
        </p>
      </div>
      <div className='right-side'>
        <img src={mario} alt='mario' id='mario'></img>
        <img src={restaurant2} alt='restaurant2' id='restaurant'></img>
      </div>
    </div>
  );
}

export default Description;
