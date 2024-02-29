import littleimage from './images/Little-Lemon.png';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <img src={littleimage} alt='restaurant' id='footer-img'></img>
        <ul className='f-navi'>
          <span>Navigation</span>
          <li className='f-nav'>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/menu'>Menu</a>
            <a href='/reservation'>Reservation</a>
            <a href='/order'>Order Online</a>
            <a href='/login'>Login</a>
          </li>
        </ul>
        <ul className='f-navi contact'>
          <span>Contact</span>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
        <ul className='f-navi social'>
          <span>Social Media Links</span>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
