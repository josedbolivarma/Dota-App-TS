import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__container'>
          <Link
          to='/'
          >
          <img
            className='navbar__logo'
            src='https://icon-library.com/images/dota-2-icon-16x16/dota-2-icon-16x16-25.jpg'
            alt='Navbar Icon'
            />
          </Link>
            <div className='navbar__links'>
            <Link to='/'>
            <h2 className='navbar__link'>HÉROES</h2>
            </Link>
            </div>
        </div>
    </div>
  )
}
