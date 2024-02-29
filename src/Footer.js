import littleimage from './images/Little-Lemon.png';

function Footer() {
  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
