import HeaderNavbar from './HeaderNavbar';
import HeaderPhone from './HeaderPhone';
import './Header.scss';

const Header = () => (
  <div className='app-header'>
    <HeaderPhone />
    <HeaderNavbar />
  </div>
);

export default Header;

